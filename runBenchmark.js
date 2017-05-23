var addbench = require('./benchmarks/add');
var update_bench = require('./benchmarks/update');
var repl_bench = require('./benchmarks/replace');
var clear_bench = require('./benchmarks/clear');

var names = require('./names/names');
var add = names.benchmarks.add;
var update = names.benchmarks.update;
var replace = names.benchmarks.replace;
var clear = names.benchmarks.clear;


exports.runBenchmark = runBenchmark;
function runBenchmark(driver, benchmark) {
	switch(benchmark) {
		//add cases:
		case add._500.name : {
			return addbench.add(driver, 500);
		}
		case add._1k.name : {
			return addbench.add(driver, 1000);
		}
		case add._2k.name : {
			return addbench.add(driver, 2000);
		}
		case add._500f_500.name : {
			return addbench.addXtoY(driver, 'First', 500, 500);
		}
		case add._500f_2k.name : {
			return addbench.addXtoY(driver, 'First', 500, 2000);
		}
		case add._500f_1k.name : {
			return addbench.addXtoY(driver, 'First', 500, 1000);
		}
		case add._500m_1k.name : {
			return addbench.addXtoY(driver, 'Mid', 500, 1000);
		}
		case add._500L_1k.name : {
			return addbench.addXtoY(driver, 'Last', 500, 1000);
		}
		case add._500f_3k.name : {
			return addbench.addXtoY(driver, 'First', 500, 3000);
		}
		case add._500f_4k.name : {
			return addbench.addXtoY(driver, 'First', 500, 4000);
		}
		case add._1f_1k.name : {
			return addbench.addXtoY(driver, 'First', 1, 1000);
		}
		case add._1L_1k.name : {
			return addbench.addXtoY(driver, 'Last', 1, 1000);
		}
		case add._2f_1k.name : {
			return addbench.addXtoY(driver, 'First', 2, 1000);
		}
		case add._2L_1k.name : {
			return addbench.addXtoY(driver, 'Last', 2, 1000);
		}

		//clear cases:
		case clear._500.name : {
			return clear_bench.clear(driver);
		}
		case clear._1k.name : {
			return clear_bench.clear(driver);
		}
		case clear._2k.name : {
			return clear_bench.clear(driver);
		}


		//update cases:
		case update._500.name : {
			return update_bench.update(driver, 'First', 500, 500);
		}
		case update._1k.name : {
			return update_bench.update(driver, 'First', 1000, 1000);
		}
		case update._2k.name : {
			return update_bench.update(driver, 'First', 2000, 2000);
		}
		case update._500f_1_5k.name : {
			return update_bench.update(driver, 'First', 500, 1500);
		}
		case update._500m_1_5k.name : {
			return update_bench.update(driver, 'Mid', 500, 1500);
		}
		case update._500L_1_5k.name : {
			return update_bench.update(driver, 'Last', 500, 1500);
		}
		case update._500f_1k.name : {
			return update_bench.update(driver, 'First', 500, 1000);
		}
		case update._500f_2k.name : {
			return update_bench.update(driver, 'First', 500, 2000);
		}
		case update._1f_1k.name : {
			return update_bench.update(driver, 'First', 1, 1000);
		}
		case update._2f_1k.name : {
			return update_bench.update(driver, 'First', 2, 1000);
		}
		case update._1f_2k.name : {
			return update_bench.update(driver, 'First', 1, 2000);
		}
		case update._1L_2k.name : {
			return update_bench.update(driver, 'Last', 1, 2000);
		}
		case update._500f_3k.name : {
			return update_bench.update(driver, 'First', 500, 3000);
		}
		case update._500f_4k.name : {
			return update_bench.update(driver, 'First', 500, 4000);
		}

		case update.partial_evr2_1k.name : {
			return update_bench.partialUpdate(driver, 2, 1000);
		}
		case update.partial_evr3_1_5k.name : {
			return update_bench.partialUpdate(driver, 3, 1500);
		}
		case update.partial_evr4_2k.name : {
			return update_bench.partialUpdate(driver, 4, 2000);
		}


		//replace cases:
		case replace._500.name : {
			return repl_bench.replace(driver, 'First', 500, 500);
		}
		case replace._1k.name : {
			return repl_bench.replace(driver, 'First', 1000, 1000);
		}
		case replace._2k.name : {
			return repl_bench.replace(driver, 'First', 2000, 2000);
		}
		case replace._500f_1_5k.name : {
			return repl_bench.replace(driver, 'First', 500, 1500);
		}
		case replace._500m_1_5k.name : {
			return repl_bench.replace(driver, 'Mid', 500, 1500);
		}
		case replace._500L_1_5k.name : {
			return repl_bench.replace(driver, 'Last', 500, 1500);
		}
		case replace._500f_1k.name : {
			return repl_bench.replace(driver, 'First', 500, 1000);
		}
		case replace._500f_2k.name : {
			return repl_bench.replace(driver, 'First', 500, 2000);
		}
		case replace._1f_1k.name : {
			return repl_bench.replace(driver, 'First', 1, 1000);
		}
		case replace._2f_1k.name : {
			return repl_bench.replace(driver, 'First', 2, 1000);
		}
		case replace._1f_2k.name : {
			return repl_bench.replace(driver, 'First', 1, 2000);
		}
		case replace._1L_2k.name : {
			return repl_bench.replace(driver, 'Last', 1, 2000);
		}
		case replace._500f_3k.name : {
			return repl_bench.replace(driver, 'First', 500, 3000);
		}
		case replace._500f_4k.name : {
			return repl_bench.replace(driver, 'First', 500, 4000);
		}

		
		// case 'select' : {
		// 	return benchmarks.select(driver);
		// }
		// case 'swap' : {
		// 	return benchmarks.swap(driver);
		// }
		// case 'remove' : {
		// 	return benchmarks.remove(driver);
		// 
		// case 'clear1000' : {
		// 	return benchmarks.clear1(driver);
		// }
		// case 'clear10000' : {
		// 	return benchmarks.clear2(driver);
		// }
		// case 'mem-load' : {
		// 	return benchmarks.memLoad(driver);
		// }
		// case 'mem-add1000' : {
		// 	return benchmarks.memAdd1(driver);
		// }
		// case 'mem-add10000' : {
		// 	return benchmarks.memAdd2(driver);
		// }
	}
}

