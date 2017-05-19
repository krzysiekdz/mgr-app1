
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var util = require('./util');
var bind = require('./bindings');
var testPeriod = 500;

//------------------- core functions

exports.initField = initField;
function initField(driver, field, value) {
	driver.findElement(By.name(field)).sendKeys(value + '');

	return driver.wait(function() {
		return driver.findElement(By.name(field)).getAttribute('value').then((val)=> {return val === value + '';});
	}, util.config.TIMEOUT);
}



//----------------------- init functions

exports.initAdd = initAdd;
function initAdd(driver, value) {
	return initField(driver, bind.input.add, value);
}

exports.initAddXtoY = initAddXtoY;
function initAddXtoY(driver, x, y) {
	return initField(driver, bind.input.add, x)
		.then(()=> initField(driver, bind.input.init, y))
		.then(()=> init(driver, y));
}

//zaczac od napisania parsera dla logow - maja zostac tylko logi z ktorych policze czas a patzac na plik wizualnie ocenie czy zostaly walasciwe logi
// ----------------- benchmark's functions


exports.init = init;
function init(driver, value) {
	driver.findElement(By.name(bind.btn.init)).click();
	
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{});
	}, util.config.TIMEOUT);
}

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

exports.addMethod = addMethod;
function addMethod(driver, method, x, y) { //method= "First" | "Mid" | "Last"
	setTimeout(function() {
		driver.findElement(By.name('add' + method)).click();
	}, testPeriod);
	
	var value = x + y;
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.xpath('//tbody/tr[' +  value +']')).then(el => {return true;}, ()=>{});
	}, util.config.TIMEOUT);
}


//-------------- old benchmarks

function replace1(driver) {
	driver.findElement(By.name('replace1')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(1000)')).then(el => el, err => console.log('error while testing "create 1000": ', err.toString()));
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function replace2(driver) {
	driver.findElement(By.name('replace2')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(10000)')).then(el => el, err => console.log('error while testing "create 10 000": ', err.toString()));
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function add1(driver) {
	driver.findElement(By.name('add1')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(1000)')).then(el => el, err => console.log('error while testing "add 1000": ', err.toString()));
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function add2(driver) {
	driver.findElement(By.name('add2')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(10000)')).then(el => el, err => console.log('error while testing "add 10 000": ', err.toString()));
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function update(driver) {
	driver.findElement(By.name('update')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(991)')).getAttribute('innerHTML').then(html => { 
			// console.log(html); 
			return html.indexOf('!!!') !== -1;
		}, 
		err => console.log('error while testing "update": ', err.toString() ) );
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function select(driver) {
	driver.findElement(By.css('table tr:nth-child(5)')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(5)')).getAttribute('outerHTML').then(html => { 
			console.log(html); 
			return html.indexOf('class="selected"') !== -1;
		}, 
		err => console.log('error while testing "select": ', err.toString() ) );
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function swap(driver) {
	driver.findElement(By.name('swap')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(5)')).getAttribute('innerHTML').then(html => { 
			// console.log(html); 
			return html.indexOf('>10<') !== -1;
		}, 
		err => console.log('error while testing "swap": ', err.toString() ) );
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function remove(driver) {
	driver.findElement(By.css('table tr:nth-child(5) button')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(5)')).getAttribute('innerHTML').then(html => { 
			// console.log(html); 
			return html.indexOf('>6<') !== -1;
		}, 
		err => console.log('error while testing "remove": ', err.toString() ) );
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function addToBig(driver) {
	driver.findElement(By.name('add1')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(11000)')).then(el => el, err => console.log('error while testing "add 1000 to 10 000": ', err.toString()));
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function clear1(driver) {
	driver.findElement(By.name('clear')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tbody')).getAttribute('childElementCount').then(count => {
			var c = Number(count); 
			return (c === 0);
		}, err => console.log('error while testing "clear 1000": ', err.toString()));
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function clear2(driver) {
	driver.findElement(By.name('clear')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tbody')).getAttribute('childElementCount').then(count => {
			var c = Number(count); 
			return (c === 0);
		}, err => console.log('error while testing "clear 10 000": ', err.toString()));
	}, util.config.TIMEOUT);//returns a promise which returns 'el'
}

function memLoad(driver) {
	driver.findElement(By.name('clear')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.name('clear')).then(el => el, err => console.log('error while testing "mem-load": ', err.toString()));
	}, util.config.TIMEOUT)
	.then(() => driver.executeScript('window.gc();'));
}

function memAdd1(driver) {
	driver.findElement(By.name('add1')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(1000)')).then(el => el, err => console.log('error while testing "mem-load": ', err.toString()));
	}, util.config.TIMEOUT)
	.then(() => driver.executeScript('window.gc();'));
}

function memAdd2(driver) {
	driver.findElement(By.name('add2')).click();
	return driver.wait(function() {//waiting until the page will render
		return driver.findElement(By.css('table tr:nth-child(10000)')).then(el => el, err => console.log('error while testing "mem-load": ', err.toString()));
	}, util.config.TIMEOUT)
	.then(() => driver.executeScript('window.gc();'));
}


// -------------- init functions

function initReplace1(driver) {
	return add1(driver);
}

function initReplace2(driver) {
	return add2(driver);
}

function initUpdate(driver) {
	return add1(driver);
}

function initSelect(driver) {
	return add1(driver);
}

function initSwap(driver) {
	return add1(driver);
}

function initRemove(driver) {
	return add1(driver);
}

function initAddToBig(driver) {
	return add2(driver);
}

function initAddToBig(driver) {
	return add2(driver);
}

function initClear1(driver) {
	return add1(driver);
}

function initClear2(driver) {
	return add2(driver);
}



// ------------ exports

exports.replace1 = replace1;
exports.replace2 = replace2;
exports.add1 = add1;
exports.add2 = add2;
exports.update = update;
exports.select = select;
exports.swap = swap;
exports.remove = remove;
exports.addToBig = addToBig;
exports.clear1 = clear1;
exports.clear2 = clear2;
exports.memLoad = memLoad;

exports.initReplace1 = initReplace1;
exports.initReplace2 = initReplace2;
exports.initUpdate = initUpdate;
exports.initSelect = initSelect;
exports.initSwap = initSwap;
exports.initRemove = initRemove;
exports.initAddToBig = initAddToBig;
exports.initClear1 = initClear1;
exports.initClear2 = initClear2;
exports.memAdd1 = memAdd1;
exports.memAdd2 = memAdd2;
