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


//palindrome

function angkaPalindrome(angka){
    var string = "";
    for (var i= angka + 1; i>angka; i++){
      string= String(i);
    }
      var angkaBalik = "";
      for (var j = angka.length - 1; j > 0; j--){
        angkaBalik+= string[j];
      }
      if (string===angkaBalik){
        return i;
      }
    }
    
    console.log(angkaPalindrome(8));