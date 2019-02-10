function perkalianUnik(arr){
  
  var num = [];
  for(var i = 0; i<arr.length; i++){
    var counter = 1;
    for (var j = 0; j<arr.length; j++){
      if(i!==j){
        counter *= arr[j];
      }
    }
    num.push(counter);
  }
  return num;
}
console.log(perkalianUnik([2, 4, 6]));