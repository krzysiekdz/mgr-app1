var addbench = require('./benchmarks/add');

var names = require('./names');

var add = names.benchmarks.add;

exports.runBenchmark = runBenchmark;
function runBenchmark(driver, benchmark) {
	switch(benchmark) {
		case add._500 : {
			return addbench.add(driver, 500);
		}
		case add._1k : {
			return addbench.add(driver, 1000);
		}
		case add._2k : {
			return addbench.add(driver, 2000);
		}
		case add._500f_500 : {
			return addbench.addXtoY(driver, 'First', 500, 500);
		}
		case add._500f_2k : {
			return addbench.addXtoY(driver, 'First', 500, 2000);
		}
		case add._500f_1k : {
			return addbench.addXtoY(driver, 'First', 500, 1000);
		}
		case add._500m_1k : {
			return addbench.addXtoY(driver, 'Mid', 500, 1000);
		}
		case add._500L_1k : {
			return addbench.addXtoY(driver, 'Last', 500, 1000);
		}



		// case 'replace1000' : {
		// 	return benchmarks.replace1(driver);
		// }
		// case 'replace10000' : {
		// 	return benchmarks.replace2(driver);
		// }
		// case 'update' : {
		// 	return benchmarks.update(driver);
		// }
		// case 'add1000' : {
		// 	return benchmarks.add1(driver);
		// }
		// case 'add10000' : {
		// 	return benchmarks.add2(driver);
		// }
		// case 'select' : {
		// 	return benchmarks.select(driver);
		// }
		// case 'swap' : {
		// 	return benchmarks.swap(driver);
		// }
		// case 'remove' : {
		// 	return benchmarks.remove(driver);
		// }
		// case 'addToBig' : {
		// 	return benchmarks.addToBig(driver);
		// }
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

