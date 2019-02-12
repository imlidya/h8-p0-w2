function ubahHuruf(kata) {

var alph="abcdefghjklmnopqrstuvwxyz";
var result='';

  for(var i=0; i<kata.length; i++){
    if(kata[i]==='z'){
      result= result + 'a';
    } else {
      for(var j=0; j<alph.length; j++){
        if(kata[i]===alph[j]){
          result= result + alph[j+1];
        }
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu


