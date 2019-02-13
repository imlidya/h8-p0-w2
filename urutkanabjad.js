function urutkanAbjad(str) {

var alph ="abcdefghjklmnopqrstuvwxyz";
var result = '';

  for(var i = 0; i < alph.length; i++) {
    for(var j = 0; j < str.length; j++) {
      if(alph[i] === str[j]) {
        result = result + str[j];
      }
    }
  }

  return result;
}
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'