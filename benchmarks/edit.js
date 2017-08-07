
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initEdit = initEdit;
function initEdit(driver, count) {
	return core.initElements(driver, count)
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return edit(driver);
			});
		});
}

// ----------------- benchmark's functions

var key = 'k';

exports.edit = edit;
function edit(driver, delayFlag) {
	var initialValue = 'string that cannot exist in original value';
	
	driver.findElement(By.name(bind.input.edit)).getAttribute('value')
		.then((val)=> {
			// console.log('val:', val); 
			initialValue = val;
		})
		.then(() => driver.findElement(By.name(bind.input.edit)).sendKeys(key));
	

	delayFlag = true;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {
			return driver.findElement(By.name(bind.input.edit)).getAttribute('value').then((val)=> {
				if(val === initialValue + key) {
					return true;
				} 
				return false;
			});
		}, util.config.TIMEOUT);
	});
}





