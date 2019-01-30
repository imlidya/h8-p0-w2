//File dua kali dikirim karena berhubungan sama file html yang berjudul TugasWeek2If-else.html//


function output() {
    var nama,peran,data;
    data = document.getElementById('daftar');
    nama = data.elements['nama'].value;
    if (nama === '') {
      document.getElementById('hasilNama').innerHTML= 'Nama harus diisi';
    }
    else {
      document.getElementById('hasilNama').innerHTML= 'Selamat datang di Dunia Proxytia, ' + nama;
    }


    peran = data.elements['peran'].value;
    if(peran == 'Ksatria') {
      document.getElementById('hasilPeran').innerHTML = 'Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!';
    }
    else if(peran == 'Tabib'){
      document.getElementById('hasilPeran').innerHTML = 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.';
    }
    else if(peran == 'Penyihir'){
      document.getElementById('hasilPeran').innerHTML = 'Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!';
    }
    else {
      document.getElementById('hasilPeran').innerHTML= 'Pilih peranmu untuk memulai game';
    }
}
