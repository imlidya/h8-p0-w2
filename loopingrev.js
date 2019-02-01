   //1 while loop

   var coding = 0;
   while(coding < 20) { 
     coding += 2; 
     console.log(coding + ' - I love coding');
   }
   var developer = 22;
   while(developer > 2){
     developer -= 2;
     console.log(developer + ' I will become fullstack developer');
   }

   //2 for loop
   
   for(var coding = 1; coding <= 20; coding++){
    console.log(coding + ' - I love coding');
  }
  
  for(var developer = 20; developer >=1; developer--){
    console.log(developer + ' - I will become fullstack developer');
  } 
   

   
   
    //3 angka ganjil genap

    
for(var angka = 1; angka <= 100; angka++){
  if((angka%2)==1){
    console.log('ganjil' + '<br>');
  }
  else if ((angka%2)===0) {
    console.log('genap' + '<br>');
  }
}


for(var tambah2 = 1; tambah2 <= 100; tambah2+=2){
  if((tambah2%3)===0){
    console.log(tambah2 + ' KELIPATAN 3' +'<br>');
  }
  else {
    console.log(' ' + '<br>');
  }
}


for(var tambah5 = 1; tambah5 <= 100; tambah5+=5){
  if((tambah5%6)===0){
    console.log(tambah5 + ' KELIPATAN 6' +'<br>');
  }
  else {
    console.log(' ' + '<br>');
  }
}


for(var tambah9 = 1; tambah9 <= 100; tambah9+=9){
  if((tambah9%10)===0){
    console.log(tambah9 + ' KELIPATAN 10' +'<br>');
  }
  else {
    console.log('' + '<br>');
  }
} 
