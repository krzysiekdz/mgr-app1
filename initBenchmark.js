var addbench = require('./benchmarks/add');
var update_bench = require('./benchmarks/update');
var repl_bench = require('./benchmarks/replace');
var clear_bench = require('./benchmarks/clear');
var swap_bench = require('./benchmarks/swap');
var fetch_bench = require('./benchmarks/fetch');
var load_bench = require('./benchmarks/load');
var input_bench = require('./benchmarks/input');
var edit_bench = require('./benchmarks/edit');
var select_bench = require('./benchmarks/select');
var remove_bench = require('./benchmarks/remove');
var filter_bench = require('./benchmarks/filter');
var search_bench = require('./benchmarks/search');
var memory_bench = require('./benchmarks/memory');

var names = require('./names/names');
var add = names.benchmarks.add;
var update = names.benchmarks.update;
var replace = names.benchmarks.replace;
var clear = names.benchmarks.clear;
var swap = names.benchmarks.swap;
var fetch = names.benchmarks.fetch;
var load = names.benchmarks.load;
var input = names.benchmarks.input;
var edit = names.benchmarks.edit;
var select = names.benchmarks.select;
var remove = names.benchmarks.remove;
var filter = names.benchmarks.filter;
var search = names.benchmarks.search;
var memory = names.benchmarks.memory;


exports.initBenchmark = initBenchmark;
function initBenchmark(driver, benchmark, framework) {
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

		//clear cases:
		case clear._500.name : {
			return clear_bench.initClear(driver, 500);
		}
		case clear._1k.name : {
			return clear_bench.initClear(driver, 1000);
		}
		case clear._2k.name : {
			return clear_bench.initClear(driver, 2000);
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


		//replace cases:
		case replace._500.name : {
			return repl_bench.initReplace(driver, 'First', 500, 500);
		}
		case replace._1k.name : {
			return repl_bench.initReplace(driver, 'First', 1000, 1000);
		}
		case replace._2k.name : {
			return repl_bench.initReplace(driver, 'First', 2000, 2000);
		}
		case replace._500f_1_5k.name : {
			return repl_bench.initReplace(driver, 'First', 500, 1500);
		}
		case replace._500m_1_5k.name : {
			return repl_bench.initReplace(driver, 'Mid', 500, 1500);
		}
		case replace._500L_1_5k.name : {
			return repl_bench.initReplace(driver, 'Last', 500, 1500);
		}
		case replace._500f_1k.name : {
			return repl_bench.initReplace(driver, 'First', 500, 1000);
		}
		case replace._500f_2k.name : {
			return repl_bench.initReplace(driver, 'First', 500, 2000);
		}
		case replace._1f_1k.name : {
			return repl_bench.initReplace(driver, 'First', 1, 1000);
		}
		case replace._2f_1k.name : {
			return repl_bench.initReplace(driver, 'First', 2, 1000);
		}
		case replace._1f_2k.name : {
			return repl_bench.initReplace(driver, 'First', 1, 2000);
		}
		case replace._1L_2k.name : {
			return repl_bench.initReplace(driver, 'Last', 1, 2000);
		}
		case replace._500f_3k.name : {
			return repl_bench.initReplace(driver, 'First', 500, 3000);
		}
		case replace._500f_4k.name : {
			return repl_bench.initReplace(driver, 'First', 500, 4000);
		}

		//swap cases
		case swap._2k_f.name : {
			return swap_bench.initSwap(driver, 'First', 2000);
		}
		case swap._2k_L.name : {
			return swap_bench.initSwap(driver, 'Last', 2000);
		}
		case swap._4k_f.name : {
			return swap_bench.initSwap(driver, 'First', 4000);
		}

		//fetch cases:
		case fetch._1k.name : {
			return fetch_bench.initFetch(driver, 1000);
		}
		case fetch._2k.name : {
			return fetch_bench.initFetch(driver, 2000);
		}

		//load case:
		case load._.name : {
			return load_bench.initLoad(driver, framework);
		}

		//input cases:
		case input._1k.name : {
			return input_bench.initInput(driver, 1000);
		}
		case input._2k.name : {
			return input_bench.initInput(driver, 2000);
		}

		//edit cases:
		case edit._1k.name : {
			return edit_bench.initEdit(driver, 1000);
		}
		case edit._2k.name : {
			return edit_bench.initEdit(driver, 2000);
		}

		//select cases:
		case select._1k_f.name : {
			return select_bench.initSelect(driver, 1000, 'First');
		}
		case select._1k_L.name : {
			return select_bench.initSelect(driver, 1000, 'Last');
		}
		case select._2k_f.name : {
			return select_bench.initSelect(driver, 2000, 'First');
		}
		case select._2k_L.name : {
			return select_bench.initSelect(driver, 2000, 'Last');
		}

		//remove cases:
		case remove._1k_f.name : {
			return remove_bench.initRemove(driver, 1000, 'First');
		}
		case remove._1k_L.name : {
			return remove_bench.initRemove(driver, 1000, 'Last');
		}
		case remove._2k_f.name : {
			return remove_bench.initRemove(driver, 2000, 'First');
		}
		case remove._2k_L.name : {
			return remove_bench.initRemove(driver, 2000, 'Last');
		}

		//filter cases:
		case filter._1k.name : {
			return filter_bench.initFilter(driver, 1000);
		}
		case filter._2k.name : {
			return filter_bench.initFilter(driver, 2000);
		}

		//search cases:
		case search._z_2k.name : {
			return search_bench.initSearch(driver, 2000, 'z');
		}
		case search._b_2k.name : {
			return search_bench.initSearch(driver, 2000, 'b');
		}
		case search._y_2k.name : {
			return search_bench.initSearch(driver, 2000, 'y');
		}
		case search._i_2k.name : {
			return search_bench.initSearch(driver, 2000, 'i');
		}
		case search._o_2k.name : {
			return search_bench.initSearch(driver, 2000, 'o');
		}
		case search._a_2k.name : {
			return search_bench.initSearch(driver, 2000, 'a');
		}
		case search._e_2k.name : {
			return search_bench.initSearch(driver, 2000, 'e');
		}

		//memory cases:
		case memory._load.name : {
			return memory_bench.initMemLoad(driver, framework);
		}
		case memory._add_1k.name : {
			return memory_bench.initMemAdd(driver, 1000);
		}
		case memory._add_2k.name : {
			return memory_bench.initMemAdd(driver, 2000);
		}
		case memory._add_3k.name : {
			return memory_bench.initMemAdd(driver, 3000);
		}
		case memory._add_4k.name : {
			return memory_bench.initMemAdd(driver, 4000);
		}

	}
}