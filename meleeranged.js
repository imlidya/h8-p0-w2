function meleeRangedGrouping (str) {
    //your code here
    if(!str.length){
        return []
    }
    var splitawal = str.split(',')
    var temp = []
    var ranged = []
    var melee = []
    var result = []
    // console.log(split)
    for(var i=0; i<splitawal.length; i++){
        temp.push(splitawal[i].split('-'))
    }
    // console.log(temp)
    for(var j=0; j<temp.length; j++){
        if(temp[j][1] === 'Ranged'){
            ranged.push(temp[j][0])
            // console.log(ranged)
        } else if(temp[j][1] === 'Melee'){
            melee.push(temp[j][0])
        }
    }
    result.push(ranged, melee)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
