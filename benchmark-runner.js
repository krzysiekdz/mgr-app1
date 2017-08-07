var util = require('./util');
var run = require('./runBenchmark');
var init = require('./initBenchmark');
var logs = require('./logWorker');
var names = require('./names/names');


function runAll(frameworks, benchmarks) {

	var tests = [];
	frameworks.forEach(frm => {
		benchmarks.forEach(bench => {
			tests.push({
				framework: frm,
				benchmark: bench,
			});
		});
	});

	util.forPromises(0, tests.length, function(i) { //for every framework and bench in there....
		let driver = util.getChromeDriver();
		let frm = tests[i].framework;
		let bench = tests[i].benchmark;

		return util.forPromises(0, util.config.TEST_COUNT, function() {//for every bench repeat it TEST_COUNT times
			return driver.get(frm.path) //must return some promise - driver returns a promise so its ok
				.then(() => init.initBenchmark(driver, bench.name, frm.name, frm, bench))
				.then(() => logs.clear(driver))
				.then(() => run.runBenchmark(driver, bench.name, frm.name, frm, bench))
				.then(() => logs.read(driver, frm.name, bench.name))
				;
		})
		.then(() => driver.quit())
		.then(() => logs.appendTraces())
		;
	})

	;
}


//names for testing -> names.js - toRun
runAll(names.frameworksToRun, names.benchmarksToRun);

