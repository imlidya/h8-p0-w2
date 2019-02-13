function targetTerdekat(arr) {
   
    var counterO = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
            counterO = i;
            break;
        }
    }

    var counterX = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'x') {
            counterX.push(i);
        }
    }

    var cari = 0;
    var counterTerdekat = [];
    for(var i = 0; i < counterX.length; i++) {
        if(counterX[i] - counterO < 0) {
            cari = counterO - counterX[i];
        }else{
            cari = counterX[i] - counterO;
        }
        counterTerdekat.push(cari);
    }
    counterTerdekat.sort(function(value1, value2) { return value1 > value2 });
    
    if(counterTerdekat[0] === undefined) {
        counterTerdekat[0] = 0;
    }

    return counterTerdekat[0];
}

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2