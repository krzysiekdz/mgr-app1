
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initClear = initClear;
function initClear(driver, value) {
	return core.initField(driver, bind.input.init, value)
		.then(() => initElements(driver, value))
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return core.clearTable(driver)
					.then(() => initElements(driver, value));
			});
		});
}

function initElements(driver, value) {
	driver.findElement(By.name(bind.btn.init)).click();
	
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{});
	}, util.config.TIMEOUT);
}


// ----------------- benchmark's functions

exports.clear = clear;
function clear(driver) {
	return core.clearTable(driver, true);
}


