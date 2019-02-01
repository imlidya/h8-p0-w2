function ExOh(str) { 
    var x='';
    var o='';
    for(i=str.length-1; i>=0; i--){
        if(str[i]=='x'){
            x+='x';
          console.log(x);
        } else if(str[i]=='o'){
            o+='o';
          console.log(o);
        }
    }
    var xNumber = x.length;
    var oNumber = o.length;

  return xNumber === oNumber; 
         
}
   
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
