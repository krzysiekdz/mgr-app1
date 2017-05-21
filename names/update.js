var names = require('./names');

names.benchmarks.update = {};

names.benchmarks.update._500 = {name:'update_500', sort_index:300};
names.benchmarks.update._1k = {name: 'update_1k', sort_index:301}; 			
names.benchmarks.update._2k =	{name:'update_2k', sort_index:302}; 			
names.benchmarks.update._500f_1_5k =	{name: 'update_500f_1_5k', sort_index:303};
names.benchmarks.update._500m_1_5k =	{name: 'update_500m_1_5k', sort_index:304};		
names.benchmarks.update._500L_1_5k =	{name: 'update_500L_1_5k', sort_index:305};		
names.benchmarks.update._500f_1k =	{name: 'update_500f_1k', sort_index:306};		
names.benchmarks.update._500f_2k =	{name: 'update_500f_2k', sort_index:307};
names.benchmarks.update._1f_1k =	{name: 'update_1f_1k', sort_index:308};		
names.benchmarks.update._2f_1k =	{name: 'update_2f_1k', sort_index:309};	
names.benchmarks.update._1f_2k =	{name: 'update_1f_2k', sort_index:310};	
names.benchmarks.update._1L_2k =	{name: 'update_1L_2k', sort_index:311};	
names.benchmarks.update._500f_3k =	{name: 'update_500f_3k', sort_index:312};	
names.benchmarks.update._500f_4k =	{name: 'update_500f_4k', sort_index:313};	

names.benchmarks.update.partial_evr2_1k =	{name: 'update_partial_evr2_1k', sort_index:314};	
names.benchmarks.update.partial_evr3_1_5k =	{name: 'update_partial_evr3_1_5k', sort_index:315};	
names.benchmarks.update.partial_evr4_2k =	{name: 'update_partial_evr4_2k', sort_index:316};	

names.benchmarks.update._1k_slow = {name: 'update_1k_slow', sort_index:302.1}; 			
names.benchmarks.update._2k_slow =	{name:'update_2k_slow', sort_index:302.2}; 	


names.benchmarks.update.all = [
	names.benchmarks.update._500,				//0
	names.benchmarks.update._1k,				//1
	names.benchmarks.update._2k, 				//2
	names.benchmarks.update._500f_1_5k,			//3
	names.benchmarks.update._500m_1_5k,			//4
	names.benchmarks.update._500L_1_5k,			//5
	names.benchmarks.update._500f_1k,			//6
	names.benchmarks.update._500f_2k,			//7
	names.benchmarks.update._1f_1k,				//8
	names.benchmarks.update._2f_1k,				//9
	names.benchmarks.update._1f_2k,				//10
	names.benchmarks.update._1L_2k,				//11
	names.benchmarks.update._500f_3k,			//12
	names.benchmarks.update._500f_4k,			//13

	names.benchmarks.update.partial_evr2_1k,		//14
	names.benchmarks.update.partial_evr3_1_5k,		//15
	names.benchmarks.update.partial_evr4_2k,		//16

	names.benchmarks.update._1k_slow,				//17
	names.benchmarks.update._2k_slow,				//18
];