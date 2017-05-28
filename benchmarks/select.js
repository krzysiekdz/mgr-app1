
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
function select(driver, count, method) {
	var element = 1;
	if(method === 'Last') {
		element = count;
	}
	var xpathEl = '//tbody/tr[' + element + ']';
	
	setTimeout(function() {
		driver.findElement(By.xpath(xpathEl)).click();	
	}, util.config.TEST_PERIOD);
	
	return driver.wait(function() {
		return driver.findElement(By.xpath(xpathEl))
			.getAttribute('class')
			.then(cl => cl === 'selected');
	}, util.config.TIMEOUT);
}

function unselect(driver, count, method) {
	var element = 1;
	if(method === 'Last') {
		element = count;
	}
	var xpathEl = '//tbody/tr[' + element + ']';
	
	setTimeout(function() {
		driver.findElement(By.xpath(xpathEl)).click();	
	}, util.config.TEST_PERIOD);
	
	return driver.wait(function() {
		return driver.findElement(By.xpath(xpathEl))
			.getAttribute('class')
			.then(cl => cl === '' );
	}, util.config.TIMEOUT);
}