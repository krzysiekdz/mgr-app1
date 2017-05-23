
var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var util = require('../util');
var bind = require('../bindings');
var core = require('./core');

var testPeriod = util.config.TEST_PERIOD;


//----------------------- init functions

exports.initReplace = initReplace;
function initReplace(driver, method, x, y) {
	return core.initField(driver, bind.input.replace, x)
		.then(() => core.initElements(driver, y))
		.then(() => {//warmup iterations
			return util.forPromises(0, util.config.WARMUP_ITERATIONS, function() {
				return replace(driver, method, x, y);
			});
		});
}

// ----------------- benchmark's functions

exports.replace = replace;
function replace(driver, method, x, y) { //method= "First" | "Mid" | "Last"
	var btn = bind.btn.replaceFirst;
	var last_element = x; //for First metod

	if(method === 'Mid') {
		btn = bind.btn.replaceMid;
		last_element = Math.floor(y/2) + Math.ceil(x/2); //for y odd and even, there is the same rule
	}
	else if(method === 'Last') {
		btn = bind.btn.replaceLast;
		last_element = y;
	}

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
}





