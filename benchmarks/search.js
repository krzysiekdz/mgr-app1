
var webdriver = require('selenium-webdriver'),
	By = webdriver.By
	Key = webdriver.Key;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initSearch = initSearch;
function initSearch(driver, count, key) {
	return core.fetch(driver, count)
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return search(driver, key)
					.then(() => removeKey(driver));
			});
		});
}

// ----------------- benchmark's functions


exports.search = search;
function search(driver, key, delayFlag) {
	driver.findElement(By.name(bind.input.search)).sendKeys(key);
	
	delayFlag = true;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {
			return driver.findElement(By.name(bind.input.search)).getAttribute('value')
				.then((val)=> val === key);
		}, util.config.TIMEOUT);
	});
}


function removeKey(driver, delayFlag) {
	driver.findElement(By.name(bind.input.search)).sendKeys(Key.BACK_SPACE);

	delayFlag = true;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {
			return driver.findElement(By.name(bind.input.search)).getAttribute('value')
				.then((val)=> val === '');
		}, util.config.TIMEOUT);
	});
}




