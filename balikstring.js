function balikString(kata) {
    var tampilan = '';
    for (var i = kata.length-1; i >= 0; i--) {
      tampilan = tampilan + kata[i];
    }
    
   console.log(tampilan);
  }
  
 
  balikString('Hello World'); 
