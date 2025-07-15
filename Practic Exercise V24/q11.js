
//create an array of 5 number and log the sum using.reduce().

var arr = [1,2,3,4,5];

 let ans = arr.reduce(function(acc,val){
    return acc + val;
},0);

console.log(ans);