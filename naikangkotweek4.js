function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var tmp = [];

    for(var i = 0; i < arrPenumpang.length; i++) {
      
      for(var j = 0; j < rute.length; j++) {
        if(arrPenumpang[i][1] === rute[j]) {
          var titik1 = j;
        }else if(arrPenumpang[i][2] === rute[j]) {
          var titik2 = j;
        }
      }

      var obj = {};
      obj.penumpang = arrPenumpang[i][0];
      obj.naikDari = arrPenumpang[i][1];
      obj.tujuan = arrPenumpang[i][2];
      obj.bayar = (titik2 - titik1) * 2000;

      tmp.push(obj);

    }

    return tmp;

  }
   console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
