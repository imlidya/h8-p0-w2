function changeVocals (str) {
  //code di sini
  var split = str.split('')
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var vokal = 'aiueoAIUEO'
  var result = []
  
  for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < vokal.length; j++) {
      if (split[i] === vokal[j]) {
        var  indeks = alfabet.indexOf(split[i]) + 1;
        split[i] = alfabet[indeks];
      }
    }
    result.push(split[i]);
  }
  
  return result;
}

function reverseWord (str) {
  //code di sini
  var terbalik = ''
  for(var i=str.length-1; i>=0; i--){
    terbalik += str[i]
  }
  return terbalik
}

function setLowerUpperCase (str) {
  //code di sini
  var result = ''
  for(var i=0; i<str.length; i++){
      var uppercase = str[i].toUpperCase()
      var lowercase = str[i].toLowerCase()
      if(str[i] === uppercase){
         result += lowercase 
      } else if(str[i] === lowercase){
          result += uppercase
      } else {
          result += str[i]
      }
  }
  return result
}

function removeSpaces (str) {
  //code di sini
  return str.replace(/\s/g,'');
}

function passwordGenerator (name) {
  //code di sini
  if(name.length<5){
      return 'Minimal karakter yang diinput adalah 5'
  }
  var ubahVokal = changeVocals(name)
  var balikKata = reverseWord(ubahVokal)
  var tukarUkuran = setLowerUpperCase(balikKata)
  var hilangSpasi = removeSpaces(tukarUkuran)
  
  return hilangSpasi
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
