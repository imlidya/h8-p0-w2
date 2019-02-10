function groupAnimals(animals) {
	var result = [];
	animals.sort();
	for (var i = 0; i < animals.length; i++) {
		if (result.length==0) {
			result.push(new Array(animals[i]))
		}
		else{
			var group= false;
			for(var j=0; j<result.length; j++){
				if(animals[i][0] == result[j][0][0]){
					result[j].push(animals[i]);
					group = true;
				}
			}
			if (group == false){
				result.push(new Array(animals[i]));
			}
		}
	}
	return result;
	
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]