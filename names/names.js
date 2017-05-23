
var names = {};
module.exports = names;
names.benchmarks = {};

//categories of benchmarks
require('./categories');

//loading benchmarks names
require('./add');
require('./clear');
require('./update');
require('./replace');
require('./swap');
require('./fetch');
require('./load');
require('./input');
require('./edit');
require('./filter');
require('./search');
require('./memory');

//frameworks
require('./frameworks');

//function preparing names for testing
require('./prepare');

//names for testing - benchamrks and frameworks
var toRun = {
	add: [], 
	clear: [],
	update: [14,15,16],
	replace: [], 
	swap:[], 
	fetch: [],
	load: [],
	input: [],
	edit: [],
	filter: [],
	search: [],
	memory: [],
	all_benchmarks:false,
	all_frameworks: false,
	frameworks: [0]
};

//preparing test cases; test names goes to benchmarksToRun and frameworksToRun
names.prepare(toRun);
