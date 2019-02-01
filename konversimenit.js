function konversiMenit(menit) {
  
    var minutes = Math.floor(menit / 60)
    var seconds = menit % 60
    
    if (String(seconds).length === 1) {
      seconds = "0"+seconds
    }
    
    var hasil = minutes + ":" + seconds
    
    return String(hasil)
  }
  
  
  console.log(konversiMenit(63)); 
  console.log(konversiMenit(124)); 
  console.log(konversiMenit(53)); 
  console.log(konversiMenit(88)); 
  console.log(konversiMenit(120)); 