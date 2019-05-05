function cariMedian(arr) {
 
  if(arr.length%2 === 0) {
    var counter1 = arr[arr.length/2-1];
    var counter2 = arr[(arr.length/2)];
    var result1 = (counter1+counter2)/2;
    return result1;
  }
  else {
    var result2 = arr[Math.floor(arr.length/2)];
    return result2;
  }
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
