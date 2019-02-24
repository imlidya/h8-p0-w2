function totalDigitRekursif(angka) {
  var angkaString=angka.toString();
  if(angkaString.length===0){
      return 0;
  }
  else{
      var angkaAwal= parseInt(angkaString[0])
      var angkaNext=angkaString.substring(1);
      return angkaAwal + totalDigitRekursif(angkaNext)
  }
}
//2
function totalDigitRekursif(angka) {
   // you can only write your code here!
   var angkaStr=angka.toString()
   var angkaArr=angkaStr.split("")
   result=Number(angkaArr[0])
   angkaArr.shift()
   angka2=Number(angkaArr.join(""))
   if(angkaArr.length===0){
       return result
   }
   else {
       return result+totalDigitRekursif(angka2)
   }

 }
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
