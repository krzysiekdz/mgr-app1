
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initSwap = initSwap;
function initSwap(driver, method, count) {
	return core.initElements(driver, count)
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return swap(driver, method, count);
			});
		});
}

// ----------------- benchmark's functions

exports.swap = swap;
function swap(driver, method, count) { //method= "First" | "Mid" | "Last"
	var btn = bind.btn.swapFirst;
	var swapped_el = 2; 

	if(method === 'Mid') {
		btn = bind.btn.swapMid;
		swapped_el = Math.ceil(count / 2); 
	}
	else if(method === 'Last') {
		btn = bind.btn.swapLast;
		swapped_el = count;
	}

	setTimeout(function() {
		driver.findElement(By.name(btn)).click();
	}, testPeriod);
	
	
	var firstCall = true, html_before; //html of last_element must be diffrent before click and after it (at least at ID position)

	return driver.wait(function() {//waiting until the page will render
		if(firstCall) {
			firstCall = false;
			return driver.findElement(By.xpath('//tbody/tr[' +  swapped_el +']'))
				.getAttribute('innerHTML')
				.then(html => {html_before = html; return false;}, (err)=>{console.log('error:', err)})
		} else {
			return driver.findElement(By.xpath('//tbody/tr[' +  swapped_el +']'))
				.getAttribute('innerHTML')
				.then(html => { return (html_before === html)? false:true; }, (err)=>{console.log('error:', err)})
		}
	}, util.config.TIMEOUT);
}





