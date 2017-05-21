var webdriver = require('selenium-webdriver');
var fs = require('fs');
var path = require('path');

var logCache = [];
logCache.find = function(frm, bench) {
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
function saveTraces() {
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






