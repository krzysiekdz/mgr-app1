
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initInput = initInput;
function initInput(driver, count) {
	return core.initElements(driver, count)
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return input(driver, false);
			});
		});
}

// ----------------- benchmark's functions

var repeats = 0;
var key = 'k';

exports.input = input;
function input(driver, clearState) {
	repeats++;

	setTimeout(function() {
		driver.findElement(By.name(bind.input.input)).sendKeys(key);
	}, util.config.TEST_PERIOD);

	return driver.wait(function() {
		return driver.findElement(By.name(bind.input.input)).getAttribute('value').then((val)=> {
			if(val === repeatKeyString(key, repeats)) {
				if(clearState) {
					repeats = 0;
				}
				return true;
			} 
			return false;
		});
	}, util.config.TIMEOUT);
}

function repeatKeyString(k, r) {
	var str = '';
	for(var i = 0; i < r; i++) {
		str += k;
	}
	return str;
}





