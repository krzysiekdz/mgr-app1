
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

var util = {};
module.exports = util;

util.forPromises = function (start, end, fn) {//fn - some function which returns a promise
    if(start >= end)
        return new Promise((resolve, reject) => {resolve()});//if 0 iterations for promises, then return empty promise

    let p = fn(start);
    for (let i = start + 1; i < end; i++) {
        p = p.then(() => fn(i));
    }
    return p;
};

// util.getDriver = function() {
// 	let logPref = new webdriver.logging.Preferences();
//     logPref.setLevel(webdriver.logging.Type.PERFORMANCE, webdriver.logging.Level.ALL);
//     // logPref.setLevel(logging.Type.BROWSER, logging.Level.ALL);
//     let options = new chrome.Options();
//     // options = options.setChromeBinaryPath("/Applications/Chromium.app/Contents/MacOS/Chromium");
//     options = options.addArguments("--js-flags=--expose-gc");
//     options = options.setLoggingPrefs(logPref);
//     options = options.setPerfLoggingPrefs({ 
//     	enableNetwork: false, 
//     	enablePage: false, 
//     	enableTimeline: false, 
//     	traceCategories: "browser,devtools.timeline,devtools", 
//     	bufferUsageReportingInterval: 1000 
//     });
//     return new webdriver.Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(options)
//         .build();
// };


util.getChromeDriver = function() {
    let logPref = new webdriver.logging.Preferences();
    logPref.setLevel(webdriver.logging.Type.PERFORMANCE, webdriver.logging.Level.ALL);
    // logPref.setLevel(logging.Type.BROWSER, logging.Level.ALL);
    let options = new chrome.Options();
    // options = options.setChromeBinaryPath("/Applications/Chromium.app/Contents/MacOS/Chromium");
    options = options.addArguments("--js-flags=--expose-gc");
    options = options.setLoggingPrefs(logPref);
    options = options.setPerfLoggingPrefs({ 
        enableNetwork: false, 
        enablePage: false, 
        enableTimeline: false, 
        // traceCategories: "browser,devtools.timeline,devtools", 
        traceCategories: "devtools.timeline",
        bufferUsageReportingInterval: 1000 
    });
    return new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
};

//--------------------- config
util.config = {
	TEST_COUNT: 4,    //how many repeats of each benchmark
	TIMEOUT: 5 * 1000, //timeout for waiting on test end
    TEST_PERIOD: 0,  //how much time wait from one test click to another one (clicking time)
    WARMUP_ITERATIONS: 4,
};
