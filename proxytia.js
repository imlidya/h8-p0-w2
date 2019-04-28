
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel 
// (untuk sekarang), yaitu nama dan peran.
//  Variabel peran harus memiliki isi data, 
//  bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
//  Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
//  Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran 
//  serta mengeluarkan respon sesuai isi variabel tersebut.

// Hints
// Variabel tetap di-input secara manual.
// Variabel nama dan peran dapat diisi apa saja.
// Nama tidak perlu dicek sama persis seperti contoh input/output
// Buat If-Else berbeda masing-masing untuk mengecek peran
var nama = "";
var peran = "Tabib";

if (nama === ""){
    console.log("Nama Harus Diisi");
}else if (peran === ""){
    console.log("Pilih Peranmu untuk memulai game");
}else if (nama !== "" && peran === ""){
    console.log("Halo "+nama+", Pilih peranmu untuk memulai game!");
}else if (nama !== "" && peran === "Ksatria"){
    console.log("Selamat datang di Dunia Proxytia, "+nama);
    console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
}else if (nama !== "" && peran === "Tabib"){
    console.log("Selamat datang di Dunia Proxytia, "+nama);
    console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
}else if (nama !== "" && peran === "Penyihir"){
    console.log("Selamat datang di Dunia Proxytia, "+nama);
    console.log("Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}else{
    console.log("Terjadi kesalahan, Silahkan ketik nama dan pilih peran sesuai ketentuan!");
}


