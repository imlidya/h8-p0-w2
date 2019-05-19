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


