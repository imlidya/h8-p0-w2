function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result=[];

  if(!arrPenumpang.length === 0){
    return arrPenumpang
  }
  for(var i=0; i<arrPenumpang.length; i++){
    for(var j=0; j<rute.length; j++){
      if(arrPenumpang[i][1]===rute[j]){
       var mulai= rute[j]
      } 
      if(arrPenumpang[i][2]===rute[j]){
      var akhir= rute[j]
      }
    }
    var jarak= +1;
    var harga = 2000*jarak;
    var obj ={
      penumpang: arrPenumpang[i][0],
      naikDari: mulai,
      tujuan: akhir,
      bayar: harga
    }
    result.push(obj)
  }
  return result
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]