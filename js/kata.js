var kataList = {
	'kata1' : {
		'name' : 'Taikyoko Shodan',
		'steps' : ['one', 'two', 'three']
	},
	'kata2' : {
		'name' : 'Taikyoko Shodan',
		'steps' : ['one', 'two', 'three']
	}
};

function output(){
	var formattedKata = KataName.replace('%data%', kataList.kata1.name);
	$('#kata').prepend(formattedKata);
	for(var steps in kataList.kata1.steps){
		var formattedSteps = KataSteps.replace('%data%', kataList.kata1.steps[steps]);
		$('.name').append(formattedSteps);
	}
	var kataCount = Object.keys(kataList).length;
	console.log(kataCount);
};

output();