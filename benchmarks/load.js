
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initLoad = initLoad;
function initLoad(driver, frmObj) {
	return  util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
		return load(driver, frmObj);
	});
}

// ----------------- benchmark's functions

exports.load = load;
function load(driver, frmObj, delayFlag) { 
	delayFlag = true;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.get(frmObj.path);
	});
	
}


