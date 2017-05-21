var addbench = require('./benchmarks/add');
var names = require('./names');

var add = names.benchmarks.add;

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

		// case 'mem-load' : {
		// 	return driver.executeScript('window.gc();');
		// }
	}
}