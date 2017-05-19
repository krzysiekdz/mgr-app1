var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');


//------------------- core functions

exports.initField = initField;
function initField(driver, field, value) {
	driver.findElement(By.name(field)).sendKeys(value + '');

	return driver.wait(function() {
		return driver.findElement(By.name(field)).getAttribute('value').then((val)=> {return val === value + '';});
	}, util.config.TIMEOUT);
}



