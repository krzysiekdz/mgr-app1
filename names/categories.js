var names = require('./names');

names.benchmarks.categories = {};

names.benchmarks.categories.add = {name: 'add', sort_index: 0};
names.benchmarks.categories.update = {name: 'update', sort_index: 1};
names.benchmarks.categories.replace = {name: 'replace', sort_index: 2};
names.benchmarks.categories.swap = {name: 'swap', sort_index: 3};
names.benchmarks.categories.all = [
	names.benchmarks.categories.add,
	names.benchmarks.categories.update,
	names.benchmarks.categories.replace,
	names.benchmarks.categories.swap,
];