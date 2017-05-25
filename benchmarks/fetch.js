
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initFetch = initFetch;
function initFetch(driver, count) {
	return  util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
		return fetch(driver, count)
			.then(core.clearTable(driver));
	});
}

// ----------------- benchmark's functions

exports.fetch = fetch;
function fetch(driver, count) { 
	var btn = bind.btn.fetch_1k;
	if(count === 2000)
		btn = bind.btn.fetch_2k;

	setTimeout(function() {
		driver.findElement(By.name(btn)).click();
	}, testPeriod);
	
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  count +']')).then(el => {return true;}, ()=>{});
	}, util.config.TIMEOUT);
}


