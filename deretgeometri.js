function tentukanDeretGeometri(arr) {
    
    var counter = 0;
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[1]/arr[0] === arr[i+1] / arr[i]) {
            counter = counter + 0;
        }else{
            counter = counter + 1;
        }
    }

    if(counter > 0) {
        return false;
    }else{
        return true;
    }
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); 
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); 
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); 
  console.log(tentukanDeretGeometri([2, 6, 18, 54]));
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); 