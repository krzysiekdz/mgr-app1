var addbench = require('./benchmarks/add');
var names = require('./names');

var add = names.benchmarks.add;

exports.initBenchmark = initBenchmark;
function initBenchmark(driver, benchmark) {
	switch(benchmark) {
		case add._500 : {
			return addbench.initAdd(driver, 500);
		}
		case add._1k : {
			return addbench.initAdd(driver, 1000);
		}
		case add._2k : {
			return addbench.initAdd(driver, 2000);
		}
		case add._500f_500 : {
			return addbench.initAddXtoY(driver, 500, 500);
		}
		case add._500f_2k : {
			return addbench.initAddXtoY(driver, 500, 2000);
		}
		case add._500f_1k : {
			return addbench.initAddXtoY(driver, 500, 1000);
		}
		case add._500m_1k : {
			return addbench.initAddXtoY(driver, 500, 1000);
		}
		case add._500L_1k : {
			return addbench.initAddXtoY(driver, 500, 1000);
		}

		// case 'mem-load' : {
		// 	return driver.executeScript('window.gc();');
		// }
	}
}