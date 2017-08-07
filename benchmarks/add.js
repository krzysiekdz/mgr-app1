
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
				return add(driver, value, true)
					.then(() => core.clearTable(driver));
			});
		});
}

exports.initAddXtoY = initAddXtoY;
function initAddXtoY(driver, x, y, method) {
	return core.initField(driver, bind.input.add, x)
		.then(()=> core.initField(driver, bind.input.init, y))
		.then(()=> initElements(driver, y, true))
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return addXtoY(driver, method, x, y, true)
					.then(() => core.clearTable(driver))
					.then(()=> initElements(driver, y, true));
			});
		});
}

function initElements(driver, value, delayFlag) {
	driver.findElement(By.name(bind.btn.init)).click();
	
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {//waiting until the page will render
			return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{});
		}, util.config.TIMEOUT);
	});
}


// ----------------- benchmark's functions


exports.add = add;
function add(driver, value, delayFlag) {
	setTimeout(function() {
		driver.findElement(By.name(bind.btn.addFirst)).click();
	}, testPeriod);
	
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {//waiting until the page will render
			return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{}
				 // err => console.log('error while testing "add": ', err.toString())
			);
		}, util.config.TIMEOUT);
	} );
}

exports.addXtoY = addXtoY;
function addXtoY(driver, method, x, y, delayFlag) { //method= "First" | "Mid" | "Last"
	var btn = bind.btn.addFirst;
	if(method === 'Mid')
		btn = bind.btn.addMid;
	else if(method === 'Last') 
		btn = bind.btn.addLast;

	setTimeout(function() {
		driver.findElement(By.name(btn)).click();
	}, testPeriod);
	
	var value = x + y;
	var delayTime = (delayFlag)? util.config.DELAY : 0;
	return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
	.then( () => {
		return driver.wait(function() {//waiting until the page will render
			return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{});
		}, util.config.TIMEOUT);
	} );
}


