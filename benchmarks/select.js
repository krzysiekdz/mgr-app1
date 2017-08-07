
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initSelect = initSelect;
function initSelect(driver, count, method) {
	return core.initElements(driver, count)
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return select(driver, count, method)
					.then(() => unselect(driver, count, method));
			});
		});
}

// ----------------- benchmark's functions

exports.select = select;
function select(driver, count, method, delayFlag) {
	var element = 1;
	if(method === 'Last') {
		element = count;
	}
	var xpathEl = '//tbody/tr[' + element + ']';
	
	driver.findElement(By.xpath(xpathEl)).click();	
	
	delayFlag = true;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {
			return driver.findElement(By.xpath(xpathEl))
				.getAttribute('class')
				.then(cl => { return cl.trim() === 'selected'});
		}, util.config.TIMEOUT);
	});
}

function unselect(driver, count, method, delayFlag) {
	var element = 1;
	if(method === 'Last') {
		element = count;
	}
	var xpathEl = '//tbody/tr[' + element + ']';
	
	driver.findElement(By.xpath(xpathEl)).click();	
	
	delayFlag = true;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {
			return driver.findElement(By.xpath(xpathEl))
				.getAttribute('class')
				.then(cl => cl === '' );
		}, util.config.TIMEOUT);
	});
}