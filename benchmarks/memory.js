
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
function initMemLoad(driver, frmObj) {
	return load.initLoad(driver, frmObj);
}

exports.initMemAdd = initMemAdd;
function initMemAdd(driver, count) {
	return add.initAdd(driver, count);
}

// ----------------- benchmark's functions

exports.memLoad = memLoad;
function memLoad(driver, frmObj) { 
	return load.load(driver, frmObj, true)
		.then(() => driver.executeScript('window.gc();'))
		.then(() => new Promise((resolve, reject) => {
			setTimeout(() => resolve(), util.config.DELAY);
		}) );
}

exports.memAdd = memAdd;
function memAdd(driver, count) { 
	return add.add(driver, count, true)
		.then(() => driver.executeScript('window.gc();'))
		.then(() => new Promise((resolve, reject) => {
			setTimeout(() => resolve(), util.config.DELAY)
		}) );
}
