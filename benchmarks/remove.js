
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initRemove = initRemove;
function initRemove(driver, count, method) {
	count += util.config.WARMUP_ITERATIONS; //creating some extra elements for warmup iterations

	return core.initElements(driver, count) 
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return remove(driver, count--, method); 
			});
		});
}

// ----------------- benchmark's functions

exports.remove = remove;
function remove(driver, count, method) {
	var element = 1;
	if(method === 'Last') {
		element = count;
	}
	var xpathEl = '//tbody/tr[' + element + ']/td[6]/button'; //button remove
	
	setTimeout(function() {
		driver.findElement(By.xpath(xpathEl)).click();	
	}, util.config.TEST_PERIOD);
	
	return driver.wait(function() {
		return driver.findElements(By.xpath('//tbody/tr'))
			.then(els => els.length === count-1 );
	}, util.config.TIMEOUT);
}

