
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
			.then(() => core.clearTable(driver));
	});
}

// ----------------- benchmark's functions

exports.fetch = fetch;
function fetch(driver, count, delayFlag) { 
	var btn = bind.btn.fetch_1k;
	if(count === 2000)
		btn = bind.btn.fetch_2k;

	driver.findElement(By.name(btn)).click();
	
	delayFlag = true;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {//waiting until the page will render
			console.log('fetch');
			return driver.findElement(By.xpath('//tbody/tr[' +  count +']')).then(el => {return true;}, ()=>{});
		}, util.config.TIMEOUT);
	});
}


