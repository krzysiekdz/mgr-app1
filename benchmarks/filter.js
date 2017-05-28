
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initFilter = initFilter;
function initFilter(driver, count) {
	return core.initElements(driver, count)
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return filter(driver)
					.then(() => unfilter(driver));
			});
		});
}

// ----------------- benchmark's functions

exports.filter = filter;
function filter(driver) {
	setTimeout(function() {
		driver.findElement(By.name(bind.checkbox.filter)).click();	
	}, util.config.TEST_PERIOD);
	
	return driver.wait(function() {
		return driver.findElement(By.xpath('//tbody'))
			.getAttribute('class')
			.then(cl => cl === 'filtered');
	}, util.config.TIMEOUT);
}

function unfilter(driver) {
	setTimeout(function() {
		driver.findElement(By.name(bind.checkbox.filter)).click();	
	}, util.config.TEST_PERIOD);
	
	return driver.wait(function() {
		return driver.findElement(By.xpath('//tbody'))
			.getAttribute('class')
			.then(cl => cl === '');
	}, util.config.TIMEOUT);
}