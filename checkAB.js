function checkAB(str){

var a=[];
var b=[];

  for(var i=0; i<str.length; i++){
    if(str[i]==='a'){
      a.push(i);
    } if(str[i]==='b'){
      b.push(i);
    }
  }
  if(a.length === 0 || b.length === 0){
    return false;
  }

  for(var i=0; i<a.length; i++){
    for(var j=0; j<b.length; j++){
      
      var jumlah= (a[i] - b[j]) - 1;
        if (jumlah<0){
          jumlah= (b[j] - a[i]) -1;
        }
        if(jumlah === 3){
            return true;
        } 
      }
    }
    return false;
}
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false