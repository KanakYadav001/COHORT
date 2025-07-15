//Remove duplicate values from an array.

var arr = [1,2,3,4,5,1,2,1,1,2,2,3,3,3,2];

let ans = [...new Set(arr)];

console.log(ans);