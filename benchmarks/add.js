
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initAdd = initAdd;
function initAdd(driver, value) {
	return core.initField(driver, bind.input.add, value)
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return add(driver, value)
					.then(() => core.clearTable(driver));
			});
		});
}

exports.initAddXtoY = initAddXtoY;
function initAddXtoY(driver, x, y, method) {
	return core.initField(driver, bind.input.add, x)
		.then(()=> core.initField(driver, bind.input.init, y))
		.then(()=> initElements(driver, y))
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return addXtoY(driver, method, x, y)
					.then(() => core.clearTable(driver))
					.then(()=> initElements(driver, y));
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


exports.add = add;
function add(driver, value) {
	setTimeout(function() {
		driver.findElement(By.name(bind.btn.addFirst)).click();
	}, testPeriod);
	
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{}
			 // err => console.log('error while testing "add": ', err.toString())
		);
	}, util.config.TIMEOUT);
}

exports.addXtoY = addXtoY;
function addXtoY(driver, method, x, y) { //method= "First" | "Mid" | "Last"
	var btn = bind.btn.addFirst;
	if(method === 'Mid')
		btn = bind.btn.addMid;
	else if(method === 'Last') 
		btn = bind.btn.addLast;

	setTimeout(function() {
		driver.findElement(By.name(btn)).click();
	}, testPeriod);
	
	var value = x + y;
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{});
	}, util.config.TIMEOUT);
}


