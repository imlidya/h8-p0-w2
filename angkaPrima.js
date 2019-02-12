function angkaPrima(angka) {

  for (var i = 2; i < angka; i++) {
    var pembagi = i;
    var inspector = angka % pembagi;
    
    if (inspector === 0) {
      return false;
    }
  }
  return true;
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false