
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initLoad = initLoad;
function initLoad(driver, framework) {
	return  util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
		return load(driver, framework);
	});
}

// ----------------- benchmark's functions

exports.load = load;
function load(driver, framework) { 
	return driver.get('http://localhost:8080/' + framework + '/public')
		.then(() => new Promise((resolve, reject) => {
			setTimeout(() => resolve(), testPeriod);
		}));
}


