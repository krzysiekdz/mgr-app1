
var names = {};
module.exports = names;
names.benchmarks = {};

//categories of benchmarks
require('./categories');

//loading add benchmarks names
require('./add');
//loading replace benchmarks names
require('./replace');

//frameworks
require('./frameworks');

//function preparing names for testing
require('./prepare');

//names for testing - benchamrks and frameworks
var toRun = {
	add: [0], 
	replace: [], 
	swap:[], 
	all:false,
	frameworks: [0]
};

//preparing test cases; test names goes to benchmarksToRun and frameworksToRun
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