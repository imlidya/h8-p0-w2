function totalDigitRekursif(angka) {
  // you can only write your code here!
  var angkaStr=angka.toString()
  var angkaArr=angkaStr.split("")
  angkaArr.shift()
  var angka2=Number(angkaArr.join(""))
  var angkaawal = parseInt(angkaStr[0])
  if(angka === 0){
      return 0
  } else {
      return angkaawal + totalDigitRekursif(angka2)
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
