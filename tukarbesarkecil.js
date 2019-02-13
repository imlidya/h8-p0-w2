function tukarBesarKecil(kalimat) {
  
  var result = '';
  var uppercase, lowercase;
  
  for (var i = 0; i < kalimat.length; i++) {
    uppercase = kalimat[i].toUpperCase();
    lowercase = kalimat[i].toLowerCase();
    if (kalimat[i] === uppercase) {
      result += lowercase;
    } else if (kalimat[i] === lowercase) {
      result += uppercase;
    } else {
      result += kalimat[i];
    }
  }
  
  return result;
}
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
