let arr = [2,2,2,4,4,4,5,5,5,7,7,7,7,5,5,5,5];
let obj = {} ;

arr.forEach(function(val) {
    obj[val] === undefined ? obj[val] =1 : obj[val]++ ;

}) ;