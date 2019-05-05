function groupAnimals(animals) {
    var result =[]
    for(var i=0; i<animals.length; i++){
        for(var j=animals.length-1; j>=0; j--){
            if(animals[j-1]>animals[i]){
                var temp = animals[j]
                animals[j] = animals[j-1]
                animals[j-1] = temp
            }
        }
    }
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
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
