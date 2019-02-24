// function hapusSimbol(str) {
//   if(str.length === 0){
//     return ""
//   } else {
//     var alphNum = "abcdefghijklmnopqrstuvwxyz0123456789";
//     var modifStr = str.substring(1, str.length);
//     var word = ""
//     for(var i = 0; i < alphNum.length; i++){
//       if(str[0] === alphNum[i]){
//         word += str[0]
//       }
//     }
//   }
//   return word + hapusSimbol(modifStr)
// }

//pakeregex

function hapusSimbol(str){

  var untukRegex= str.match(/[a-z0-9]+/gi)
  return untukRegex.join('')

}
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
