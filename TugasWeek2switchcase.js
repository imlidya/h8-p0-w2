
var Tanggal = 1;
var Bulan = 2;
var Tahun = 1890;

if ((Tanggal<0 || Tanggal>31) || (Tahun<1900 || Tahun>2200)) {
  console.log('invalid')
} else {
  switch (Bulan) {
    case 1: {
      console.log(Tanggal + ' Januari ' + Tahun);
      break;
    }
    case 2: {
      console.log(Tanggal + ' Februari ' + Tahun);
      break;
    }
    case 3: {
      console.log(Tanggal + ' Maret ' + Tahun);
      break;
    }
    case 4: {
      console.log(Tanggal + ' April ' + Tahun);
      break;
    }
    case 5: {
      console.log(Tanggal + ' Mei ' + Tahun);
      break;
    }
    case 6: {
      console.log(Tanggal + ' Juni ' + Tahun);
      break;
    }
    case 7: {
      console.log(Tanggal + ' Juli ' + Tahun);
      break;
    }
    case 2: {
      console.log(Tanggal + ' Agustus ' + Tahun);
      break;
    }
    case 2: {
      console.log(Tanggal + ' September ' + Tahun);
      break;
    }
    case 2: {
      console.log(Tanggal + ' Oktober ' + Tahun);
      break;
    }
    case 2: {
      console.log(Tanggal + ' November ' + Tahun);
      break;
    }
    case 2: {
      console.log(Tanggal + ' Desember ' + Tahun);
      break;
    }
    default: { console.log('Tanggal/Bulan/Tahun tidak tersedia'); }
  }
}


