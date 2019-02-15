var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]

];

function dataHandling(input){
    var i = 0;
    while ( i < input.length){
        console.log('Nomor ID : ' + input[i][0]);
        console.log('Nama Lengkap : ' + input[i][1]);
        console.log('TTL : ' + input[i][2] + '' + input[i][3]);
        console.log('Hobi : ' + input[i][4]);
        console.log('');
        i++;
    }
}

dataHandling(input);


//kalo pake for

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
function dataHandling(input){
 
  var data='';
  for (var n=0; n<input.length; n++ ){
    data += 'Nomor ID: ' + input[n][0] + '\n' + 
                'Nama Lengkap: ' + input[n][1] + '\n' + 
                'TTL: ' + input[n].slice(2,4).join(' ') + '\n' + 
                'Hobi: ' + input[n][4]+ '\n' + '\n';
  }
  return data;
}



console.log(dataHandling(input));