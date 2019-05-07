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
    
    if(tempA.length === 0 || tempB.length === 0){
        return false   
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
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

  
