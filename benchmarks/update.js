
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initUpdate = initUpdate;
function initUpdate(driver, method, x, y) {
	return core.initField(driver, bind.input.update, x)
		.then(() => core.initElements(driver, y, true))
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return update(driver, method, x, y, true);
			});
		});
}

exports.initPartialUpdate = initPartialUpdate;
function initPartialUpdate(driver, x, y) {
	return core.initField(driver, bind.input.updateEvery, x)
		.then(() => core.initElements(driver, y, true))
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return partialUpdate(driver, x, y, true);
			});
		});
}



// ----------------- benchmark's functions

exports.update = update;
function update(driver, method, x, y, delayFlag) { //method= "First" | "Mid" | "Last"
	var btn = bind.btn.updateFirst;
	var last_element = x; //for First metod

	if(method === 'Mid') {
		btn = bind.btn.updateMid;
		last_element = Math.floor(y/2) + Math.ceil(x/2); //for y odd and even, there is the same rule
	}
	else if(method === 'Last') {
		btn = bind.btn.updateLast;
		last_element = y;
	}

	delayFlag = true;
	if(!delayFlag) {
		setTimeout(function() {
			driver.findElement(By.name(btn)).click();
		}, testPeriod);
		
		
		var firstCall = true, html_before; //html of last_element must be diffrent before click and after it (at least at ID position)

		return driver.wait(function() {//waiting until the page will render
			if(firstCall) {
				firstCall = false;
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => {html_before = html; return false;}, (err)=>{console.log('error:', err)})
			} else {
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => { return (html_before === html)? false:true; }, (err)=>{console.log('error:', err)})
			}
		}, util.config.TIMEOUT);
	} else {
		var html_before;

		setTimeout(function() {
			driver.wait(function() {
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => {html_before = html; return true;}, (err)=>{console.log('error:', err)})
			})
			.then(()=> {driver.findElement(By.name(btn)).click();});
		}, testPeriod);


		var delayTime = (delayFlag)? util.config.DELAY : 0;
		return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
		.then( () => {
			return driver.wait(function() {//waiting until the page will render
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => { return (html_before === html)? false:true; }, (err)=>{console.log('error:', err)});
			}, util.config.TIMEOUT);
		});
	}
}

exports.partialUpdate = partialUpdate;
function partialUpdate(driver, x, y, delayFlag) {
	var last_element = y+1 - x;

	delayFlag = true;
	if(!delayFlag) {
		setTimeout(function() {
			driver.findElement(By.name(bind.btn.updateEvery)).click();
		}, testPeriod);
		
		var firstCall = true, html_before; //html of last_element must be diffrent before click and after it (at least at ID position)

		return driver.wait(function() {//waiting until the page will render
			if(firstCall) {
				firstCall = false;
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => {html_before = html; return false;}, (err)=>{console.log('error:', err)})
			} else {
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => { return (html_before === html)? false:true; }, (err)=>{console.log('error:', err)})
			}
		}, util.config.TIMEOUT);
	} else {
		var html_before;

		setTimeout(function() {
			driver.wait(function() {
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => {html_before = html; return true;}, (err)=>{console.log('error:', err)})
			})
			.then(()=>{driver.findElement(By.name(bind.btn.updateEvery)).click();});
		}, testPeriod);
		
		var delayTime = (delayFlag)? util.config.DELAY : 0;
		return  new Promise((resolve, reject) => {setTimeout(function() {resolve();}, delayTime)})//delaying 
		.then( () => {
			return driver.wait(function() {//waiting until the page will render
				return driver.findElement(By.xpath('//tbody/tr[' +  last_element +']'))
					.getAttribute('innerHTML')
					.then(html => { return (html_before === html)? false:true; }, (err)=>{console.log('error:', err)})
			}, util.config.TIMEOUT);
		});
	}
	
}


//spr czemu bierze mi gorszy czas scr dla angular2


