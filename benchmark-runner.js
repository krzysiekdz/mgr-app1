var util = require('./util');
var run = require('./runBenchmark');
var init = require('./initBenchmark');
var logs = require('./logWorker');
var names = require('./names');


function runAll(frameworks, benchmarks) {

	var tests = [];
	frameworks.forEach(frm => {
		benchmarks.forEach(bench => {
			tests.push({
				framework: frm.name,
				benchmark: bench.name,
			});
		});
	});

	util.forPromises(0, tests.length, function(i) { //for every framework and bench in there....
		let driver = util.getChromeDriver();
		let frm = tests[i].framework;
		let bench = tests[i].benchmark;
		// let notclear = ( bench.indexOf('mem-load') > -1 ) ? true:false;

		return util.forPromises(0, util.config.TEST_COUNT, function() {//for every bench repeat it TEST_COUNT times
			return driver.get('http://localhost:8080/' + frm + '/public') //must return some promise - driver returns a promise so its ok
				.then(() => init.initBenchmark(driver, bench))
				.then(() => logs.clear(driver /*, notclear*/))
				.then(() => run.runBenchmark(driver, bench))
				.then(() => logs.read(driver, frm, bench))
				;
		})
		.then(() => driver.quit())
		;
	})
	.then(() => logs.saveTraces())
	;
}


//names for testing -> names.js - toRun
runAll(names.frameworksToRun, names.benchmarksToRun);

