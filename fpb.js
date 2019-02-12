function fpb(angka1, angka2){

var akg1=[];
var akg2=[];
var result=[];

  for(var i=0; i<angka1; i++){
    if(angka1%i===0){
      akg1.push(i);
    }
  }for(var j=0; j<angka2; j++){
    if(angka2%j===0){
      akg2.push(j);
    }
  }
  for(var k=akg1.length-1; k>=0; k--){
    for(var l=akg2.length-1; l>=0; l--){
      if(akg1[k]===akg2[l]){
        result.push(akg1[k]);
      }
    }
  }
  return result[0];
}
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

  