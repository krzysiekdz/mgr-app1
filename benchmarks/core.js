var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');


//------------------- core functions

exports.initField = initField;
function initField(driver, field, value) {
	driver.findElement(By.name(field)).sendKeys(value + '');

	return driver.wait(function() {
		return driver.findElement(By.name(field)).getAttribute('value').then((val)=> {return val === value + '';});
	}, util.config.TIMEOUT);
}

exports.clearTable = clearTable;
function clearTable(driver) {
	driver.findElement(By.name(bind.btn.clear)).click();	

	return driver.wait(function() {
		return driver.findElements(By.xpath('//tbody/tr')).then(els => {return els.length === 0;});
	}, util.config.TIMEOUT);
}

exports.initElements = initElements;
function initElements(driver, value) {
	initField(driver, bind.input.init, value)
		.then(() => driver.findElement(By.name(bind.btn.init)).click());
	
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{});
	}, util.config.TIMEOUT);
}

exports.clearTableDelayed = clearTableDelayed;
function clearTableDelayed(driver) {
	setTimeout(function() {
		driver.findElement(By.name(bind.btn.clear)).click();	
	}, util.config.TEST_PERIOD);
	

	return driver.wait(function() {
		return driver.findElements(By.xpath('//tbody/tr')).then(els => {return els.length === 0;});
	}, util.config.TIMEOUT);
}

exports.fetch = fetch;
function fetch(driver, count) { 
	var btn = bind.btn.fetch_1k;
	if(count === 2000)
		btn = bind.btn.fetch_2k;

	driver.findElement(By.name(btn)).click();
	
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  count +']')).then(el => {return true;}, ()=>{});
	}, util.config.TIMEOUT);
}



