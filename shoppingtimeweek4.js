function shoppingTime(memberId, money) {
 
 var listPurchased2 =[]
 var listPurchased = [
   ['Sepatu Stacattu', 1500000],
   ['Baju Zoro', 500000],
   ['Baju H&N', 250000],
   ['Sweater Uniklooh', 175000],
   ['Casing Handphone', 50000]
 ]
  var change =money;
  if(memberId === undefined || memberId === ''){
   return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } 
  if(money<50000){
    return 'Mohon maaf, uang tidak cukup'
  }
  for(i=0; i<listPurchased.length; i++){
    // console.log(listPurchased[i])
    // var listPurchased2 =[]
    if(change >= listPurchased[i][1]){
      change -=listPurchased[i][1]; 
      listPurchased2.push(listPurchased[i][0])  
    }
  } 
  var obj = {
   memberId: memberId,
   money: money,
   listPurchased: listPurchased2,
   changeMoney: change
  }
  
 return obj
}
 
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja