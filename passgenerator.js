function changeVocals (str) {
  var vokalLower='aiueo'
  var vokalUpper=vokalLower.toUpperCase();
  var hasilDiubahLower='bjvfp'
  var hasilDiubahUpper=hasilDiubahLower.toUpperCase();

  if(str.length<5){
      return false;
  }
  else{
      var result='';
      for(var i=0;i<str.length;i++){
          var char=str[i]
          ketemu=false;
          for(var j=0;j<vokalLower.length;j++){
              if(char===vokalLower[j]){
                  ketemu=true;
                  result=result+hasilDiubahLower[j]
                  break;
              }
              else if(char===vokalUpper[j]){
                  ketemu=true;
                  result=result+hasilDiubahUpper[j]
                  break;
              }
              else{
                  ketemu=false
              }
          }
          if(ketemu===false){
              result=result+str[i];
          }
      }
  }
  return result;
}

function reverseWord (str) {
  var word ='';
  for(var i=str.length-1; i>0; i--){
    word+= str[i]
  }
  return word
}

function setLowerUpperCase (str) {
  var alph='abcdefghijklmnopqrstuvwxyz'
  var alphUpper=alph.toUpperCase();
  var result=''
  for(var i=0;i<str.length;i++){
      var ketemu=false
      for(var j=0;j<alph.length;j++){
          if(alph[j]===str[i]){
              ketemu=true;
              result=result+alphUpper[j]
              break;
          }
          else if(alphUpper[j]===str[i]){
              ketemu=true;
              result=result+alph[j]
              break;
          }
          else{
              ketemu=false;
          }
      }
      if(ketemu===false){
          result=result+str[i]
      }

  }
  return result
 
}

function removeSpaces (str) {
    //code di sini

  var result=''
  for(var i=0;i<str.length;i++){
      if(str[i] !==" "){
          result=result+str[i]
      }
  }
  return result;
}

function passwordGenerator (name) {
  var hasilVocal = changeVocals(name);
    if(hasilVocal===false){
      return "Minimal karakter yang diinputkan adalah 5 karakter"
    }else{
        var hasilReverse=reverseWord(hasilVocal)
        var hasilLowerUper=setLowerUpperCase(hasilReverse);
        var hasilRemoveSpace=removeSpaces(hasilLowerUper);
        return hasilRemoveSpace
    }
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
