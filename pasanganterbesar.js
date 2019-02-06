function pasanganTerbesar(num){

var string=String(num);
var pair = "";
var counter = "0";

for(var i=0; i<string.length-1; i++){
  pair = (string[i]+string[i+1]); 
 if(pair>=counter){
  counter=pair;
 }

}
return counter;
}


console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

