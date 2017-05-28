
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');
var load = require('./load');
var add = require('./add');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initMemLoad = initMemLoad;
function initMemLoad(driver, framework) {
	return load.initLoad(driver, framework);
}

exports.initMemAdd = initMemAdd;
function initMemAdd(driver, count) {
	return add.initAdd(driver, count);
}

// ----------------- benchmark's functions

exports.memLoad = memLoad;
function memLoad(driver, framework) { 
	return load.load(driver, framework)
		.then(() => driver.executeScript('window.gc();'));
}

exports.memAdd = memAdd;
function memAdd(driver, count) { 
	return add.add(driver, count)
		.then(() => driver.executeScript('window.gc();'));
}
