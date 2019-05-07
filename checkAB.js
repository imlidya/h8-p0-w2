function checkAB(num) {
    var tempA=[]
    var tempB=[]
    for(var i=0; i<num.length; i++){
        if(num[i] === 'a'){
            tempA.push(i)
            // console.log(tempA)
        } else if(num[i] === 'b'){
            tempB.push(i)
        }
    }
    for(var i=0; i<tempA.length; i++){
        for(var j=0; j<tempB.length; j++){
            var jumlah = (tempA[i]-tempB[j])-1
            if (jumlah<0){
                jumlah= (tempB[j] - tempA[i]) -1;
            }
            if(jumlah === 3){
                return true
            }
        }
    }
    return false

  }
  
