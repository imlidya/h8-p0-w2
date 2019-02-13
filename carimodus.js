function cariModus(arr) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                counter += 1;
            }
        }
    }

    if(arr.length / counter === 1 || (arr.length * arr.length) / counter === 1) {
        return -1;
    }

    for(var i = 0; i < arr.length; i++) {
        var counter = 0;
        for(var j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                counter += 1;
            }
        }
        if(counter > 1) {
            return  arr[i];
        }
    }
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1