var addbench = require('./benchmarks/add');
var update_bench = require('./benchmarks/update');
var names = require('./names/names');

var add = names.benchmarks.add;
var update = names.benchmarks.update;

exports.initBenchmark = initBenchmark;
function initBenchmark(driver, benchmark) {
	switch(benchmark) {
		//add cases
		case add._500.name : {
			return addbench.initAdd(driver, 500);
		}
		case add._1k.name : {
			return addbench.initAdd(driver, 1000);
		}
		case add._2k.name : {
			return addbench.initAdd(driver, 2000);
		}
		case add._500f_500.name : {
			return addbench.initAddXtoY(driver, 500, 500, 'First');
		}
		case add._500f_2k.name : {
			return addbench.initAddXtoY(driver, 500, 2000, 'First');
		}
		case add._500f_1k.name : {
			return addbench.initAddXtoY(driver, 500, 1000, 'First');
		}
		case add._500m_1k.name : {
			return addbench.initAddXtoY(driver, 500, 1000, 'Mid');
		}
		case add._500L_1k.name : {
			return addbench.initAddXtoY(driver, 500, 1000, 'Last');
		}
		case add._500f_3k.name : {
			return addbench.initAddXtoY(driver, 500, 3000, 'First');
		}
		case add._500f_4k.name : {
			return addbench.initAddXtoY(driver, 500, 4000, 'First');
		}
		case add._1f_1k.name : {
			return addbench.initAddXtoY(driver, 1, 1000, 'First');
		}
		case add._1L_1k.name : {
			return addbench.initAddXtoY(driver, 1, 1000, 'Last');
		}
		case add._2f_1k.name : {
			return addbench.initAddXtoY(driver, 2, 1000, 'First');
		}
		case add._2L_1k.name : {
			return addbench.initAddXtoY(driver, 2, 1000, 'Last');
		}

		//update cases:
		case update._500.name : {
			return update_bench.initUpdate(driver, 'First', 500, 500);
		}
		case update._1k.name : {
			return update_bench.initUpdate(driver, 'First', 1000, 1000);
		}
		case update._2k.name : {
			return update_bench.initUpdate(driver, 'First', 2000, 2000);
		}
		case update._500f_1_5k.name : {
			return update_bench.initUpdate(driver, 'First', 500, 1500);
		}
		case update._500m_1_5k.name : {
			return update_bench.initUpdate(driver, 'Mid', 500, 1500);
		}
		case update._500L_1_5k.name : {
			return update_bench.initUpdate(driver, 'Last', 500, 1500);
		}
		case update._500f_1k.name : {
			return update_bench.initUpdate(driver, 'First', 500, 1000);
		}
		case update._500f_2k.name : {
			return update_bench.initUpdate(driver, 'First', 500, 2000);
		}
		case update._1f_1k.name : {
			return update_bench.initUpdate(driver, 'First', 1, 1000);
		}
		case update._2f_1k.name : {
			return update_bench.initUpdate(driver, 'First', 2, 1000);
		}
		case update._1f_2k.name : {
			return update_bench.initUpdate(driver, 'First', 1, 2000);
		}
		case update._1L_2k.name : {
			return update_bench.initUpdate(driver, 'Last', 1, 2000);
		}
		case update._500f_3k.name : {
			return update_bench.initUpdate(driver, 'First', 500, 3000);
		}
		case update._500f_4k.name : {
			return update_bench.initUpdate(driver, 'First', 500, 4000);
		}

		case update.partial_evr2_1k.name : {
			return update_bench.initPartialUpdate(driver, 2, 1000);
		}
		case update.partial_evr3_1_5k.name : {
			return update_bench.initPartialUpdate(driver, 3, 1500);
		}
		case update.partial_evr4_2k.name : {
			return update_bench.initPartialUpdate(driver, 4, 2000);
		}

		// case 'mem-load' : {
		// 	return driver.executeScript('window.gc();');
		// }
	}
}