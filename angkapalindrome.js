function angkaPalindrome(angka){
    var stringAngka = "";
    for (var i= angka + 1; i>angka; i++){
      stringAngka= String(i);
    
      var angkaBalik = "";
      var j = stringAngka.length-1;
      while(j>=0){
        angkaBalik += stringAngka[j];
        j--
      }

      if(stringAngka===angkaBalik){
        return i;
        break;
      }
   }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001