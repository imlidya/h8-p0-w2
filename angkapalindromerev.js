function angkaPalindrome(num){

num++;
var i = num;

while(i< num * num){
  var angkaBalik = String(i);

  var counter= "";
  var j = angkaBalik.length-1;
  while(j>=0){
    counter+= angkaBalik[j];
    j--;
  }
  if(i === (Number(counter))){
    return i;
  }
  i++;
 }
}
console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000)); 
