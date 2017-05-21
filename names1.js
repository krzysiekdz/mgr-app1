
var names = {};
module.exports = names;
names.benchmarks = {};

//add
names.benchmarks.add = {};

names.benchmarks.add._500 = 'add_500';
names.benchmarks.add._1k = 'add_1k'; 			
names.benchmarks.add._2k =	'add_2k'; 			
names.benchmarks.add._500f_500 =	'add_500f_500';
names.benchmarks.add._500f_2k =	'add_500f_2k';		
names.benchmarks.add._500f_1k =	'add_500f_1k';		
names.benchmarks.add._500m_1k =	'add_500m_1k';		
names.benchmarks.add._500L_1k =	'add_500L_1k';		

names.benchmarks.add.all = [
	names.benchmarks.add._500 ,			//0
	names.benchmarks.add._1k ,			//1
	names.benchmarks.add._2k ,			//2
	names.benchmarks.add._500f_500 ,	//3
	names.benchmarks.add._500f_2k ,		//4
	names.benchmarks.add._500f_1k ,		//5
	names.benchmarks.add._500m_1k ,		//6
	names.benchmarks.add._500L_1k 		//7
];


names.benchmarks.replace = [
	'repl_500', 		//0
	'repl_1k', 			//1
	'repl_2k', 			//2
	'repl_500f_1500',	//3
	'repl_500m_1500',	//4
	'repl_500L_1500',	//5
	'repl_500f_1k',		//6
	'repl_500f_2k',		//7
];

names.frameworks = [
	'vanilla-js',
	'vanilla-js-keyed',
	'angular-v1.6',
	'angular-v1.6-keyed',
	// 'react-js',
	// 'angular-2',
	// 'angular-2-keyed',
	// 'backbone'
];

names.benchmarksToRun = [];
names.frameworksToRun = [];

//preparing names for testing
names.prepare = function(toRun) {
	for(key in toRun) {
		if(key === 'all') {

		}
		else if (key === 'frameworks') {
			if(toRun.frameworks.length > 0) {
				var frams = toRun.frameworks;
				for (var i = 0; i < frams.length; i++) {
					names.frameworksToRun.push(names.frameworks[frams[i]]);
				}
			}
		} else {
			if(toRun[key].length > 0) {
				var benchs = toRun[key];
				for(var i = 0; i < benchs.length; i++ ) {
					names.benchmarksToRun.push(names.benchmarks[key]['all'][benchs[i]]);
				}
			}
		}
	}
}

//names for testing - benchamrks and frameworks
var toRun = {
	add: [0,1,2], 
	replace: [], 
	swap:[], 
	all:false,
	frameworks: [2,3]
};

names.prepare(toRun);


// var allBenchs = [
// 	'add10000', 		//1
// 	'replace1000', 		//2
// 	'replace10000', 	//3
// 	'swap', 			//4
// 	'update', 			//5
// 	'remove', 			//6
// 	'select', 			//7
// 	'clear1000', 		//8
// 	'clear10000', 		//9
// 	'addToBig', 		//10
// 	'mem-load', 		//11
// 	'mem-add1000', 		//12
// 	'mem-add10000'		//13
// 	];