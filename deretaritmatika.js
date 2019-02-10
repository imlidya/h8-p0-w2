function tentukanDeretAritmatika(arr){

  var counter = 0;
  for(i=0; i<arr.length-1; i++){
    if(arr[1]-arr[0]===arr[i+1]-arr[i]){
      counter = counter + 0;
    } else {
      counter = counter + 1
    }
  }
  if (counter>0){
    return false;
  } else {
    return true;
  }
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); 
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); 

