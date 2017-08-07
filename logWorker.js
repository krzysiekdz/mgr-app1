var webdriver = require('selenium-webdriver');
var fs = require('fs');
var path = require('path');

// function LogCache() {
// 	this.cache = [];
// }
// LogCache.prototype.find =  function(frm, bench) {
// 	for(var i = 0; i < logCache.length; i++) {
// 		if(logCache[i].framework === frm && logCache[i].benchmark === bench)
// 			return logCache[i];
// 	}
// }
// LogCache.prototype.push = function(log) {
// 	this.cache.push(log);
// }
// LogCache.prototype.get = function(i) {
// 	return this.cache[i];
// }
// LogCache.prototype.length = function() {
// 	return this.cache.length;
// }


var logCache = [];
logCache.find =  function(frm, bench) {
	for(var i = 0; i < logCache.length; i++) {
		if(logCache[i].framework === frm && logCache[i].benchmark === bench)
			return logCache[i];
	}
}

var trash = [];



exports.clear = clear;
function clear(driver, notclear) {
	if(notclear) {
		return;
	}
	return driver.manage().logs().get(webdriver.logging.Type.PERFORMANCE).then(logs => {
		logs.forEach(log => {
			trash.push(JSON.parse(log.message).message);
		});
	});
}

exports.read = read;
function read(driver, frm, bench) {
	return driver.manage().logs().get(webdriver.logging.Type.PERFORMANCE).then(logs => {
		cache = [];
		logs.forEach(log => {
			var p = JSON.parse(log.message).message.params;
			cache.push(p);
		});

		var log = logCache.find(frm, bench);
		if(log) {
			log.logs = log.logs.concat(cache);
		}
		else { 
			logCache.push({
				framework: frm,
				benchmark: bench,
				logs: cache,
			});
		}
	});
}


exports.saveTraces = saveTraces;
function saveTraces() { //saving in new trace
	for(var i = 0; i < logCache.length; i++) {
		var log = logCache[i];
		var fileName = 'traces/' + log.framework + '/' + log.benchmark + '.json';
		ensureDirname(fileName);

		(function(fn){
			fs.writeFile(fn, JSON.stringify(log.logs), { encoding: "utf8" }, (err) => {
				if(err) {
					return console.error("error while saving traces:" + fn);  
				}
				console.log("trace " + fn + " saved in file."); 
			});
		})(fileName);
	}
}

function ensureDirname(fileName) {
	var dirname = path.dirname(fileName);//returns directory name, that is traces/framework_name
	if(!fs.existsSync(dirname)) {
		fs.mkdirSync(dirname);
	} 
}

exports.appendTraces = appendTraces;
function appendTraces() { //appending traces
	for(var i = 0; i < logCache.length; i++) {
		var log = logCache[i];
		var fileName = 'traces/' + log.framework + '/' + log.benchmark + '.json';
		ensureDirname(fileName);

		(function(fn, log){
			fs.readFile(fn, function(err, data) {
				if(err) {
					if(err.errno === -4058) {//file doesnt exist
						writeFile(fn, log.logs);
					}
				} else { //if file exists, append data to it
					var arr = JSON.parse(data.toString());
					arr = arr.concat(log.logs);
					writeFile(fn, arr);
				}
			});
		})(fileName, log);
	}
	logCache.splice(0, logCache.length);
}

function writeFile(fn, obj) {
	fs.writeFile(fn, JSON.stringify(obj), { encoding: "utf8" }, (err) => {
		if(err) {
			return console.error("error while saving traces:" + fn); 
		}
		console.log("trace " + fn + " saved in file."); 
	});
}





