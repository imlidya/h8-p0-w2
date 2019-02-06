function palindrome(balikKata){
var str = "";

 for (var i = balikKata.length-1; i >= 0; i--){
  str = str + balikKata[i];
}
 if (str === balikKata){
   return true;
 } else {
   return false
 }
} 
console.log(palindrome('katak')); 
console.log(palindrome('blanket')); 
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister')); 