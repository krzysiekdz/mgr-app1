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


exports.runBenchmark = runBenchmark;
function runBenchmark(driver, benchmark, framework) {
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


		//swap cases
		case swap._2k_f.name : {
			return swap_bench.swap(driver, 'First', 2000);
		}
		case swap._2k_L.name : {
			return swap_bench.swap(driver, 'Last', 2000);
		}
		case swap._4k_f.name : {
			return swap_bench.swap(driver, 'First', 4000);
		}

		//fetch cases:
		case fetch._1k.name : {
			return fetch_bench.fetch(driver, 1000);
		}
		case fetch._2k.name : {
			return fetch_bench.fetch(driver, 2000);
		}

		//load case:
		case load._.name : {
			return load_bench.load(driver, framework);
		}

		//input cases:
		case input._1k.name : {
			return input_bench.input(driver, true);
		}
		case input._2k.name : {
			return input_bench.input(driver, true);
		}

		//edit cases:
		case edit._1k.name : {
			return edit_bench.edit(driver);
		}
		case edit._2k.name : {
			return edit_bench.edit(driver);
		}

		//select cases:
		case select._1k_f.name : {
			return select_bench.select(driver, 1000, 'First');
		}
		case select._1k_L.name : {
			return select_bench.select(driver, 1000, 'Last');
		}
		case select._2k_f.name : {
			return select_bench.select(driver, 2000, 'First');
		}
		case select._2k_L.name : {
			return select_bench.select(driver, 2000, 'Last');
		}

		//remove cases:
		case remove._1k_f.name : {
			return remove_bench.remove(driver, 1000, 'First');
		}
		case remove._1k_L.name : {
			return remove_bench.remove(driver, 1000, 'Last');
		}
		case remove._2k_f.name : {
			return remove_bench.remove(driver, 2000, 'First');
		}
		case remove._2k_L.name : {
			return remove_bench.remove(driver, 2000, 'Last');
		}
		
		//filter cases:
		case filter._1k.name : {
			return filter_bench.filter(driver);
		}
		case filter._2k.name : {
			return filter_bench.filter(driver);
		}

		//search cases:
		case search._z_2k.name : {
			return search_bench.search(driver, 'z');
		}
		case search._b_2k.name : {
			return search_bench.search(driver, 'b');
		}
		case search._y_2k.name : {
			return search_bench.search(driver, 'y');
		}
		case search._i_2k.name : {
			return search_bench.search(driver, 'i');
		}
		case search._o_2k.name : {
			return search_bench.search(driver, 'o');
		}
		case search._a_2k.name : {
			return search_bench.search(driver, 'a');
		}
		case search._e_2k.name : {
			return search_bench.search(driver, 'e');
		}

		//memory cases:
		case memory._load.name : {
			return memory_bench.memLoad(driver, framework);
		}
		case memory._add_1k.name : {
			return memory_bench.memAdd(driver, 1000);
		}
		case memory._add_2k.name : {
			return memory_bench.memAdd(driver, 2000);
		}
		case memory._add_3k.name : {
			return memory_bench.memAdd(driver, 3000);
		}
		case memory._add_4k.name : {
			return memory_bench.memAdd(driver, 4000);
		}
		
	}
}

