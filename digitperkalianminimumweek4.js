function digitPerkalianMinimum(angka) {
  var divider;
  var arr = [];
  var arrString = '';
  var counter = 0;
  
  for (var i = 1; i <= angka; i++) {
    divider = angka / i;
    arrString = i.toString() + divider.toString();
  
    if (divider % 1 === 0) {
      arr.push(arrString);
      
      if (counter === 0) {
        counter = arrString.length;
      } else {
        if (counter > arrString.length) {
          counter = arrString.length;
        }
      }
    }
  }
  return counter;
}
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


//cara2tapicumanbisatestcase1-3why:(

function digitPerkalianMinimum(angka){


var result=[];

  for(var i=0; i<angka; i++){
    for(var j=0; j<angka; j++){
        result.push(join);
      }
      if(i*j === angka){
        var join=i.toString() + j.toString();
    }
  }
  var minTemp = result[0].length;
   for(var k=0; k<result[k].length; k++){
     if(result[k].length < minTemp){
       minTemp= result[k].length;
     }
   }
   return minTemp;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
