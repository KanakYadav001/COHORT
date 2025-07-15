//Find The Second Largest Number In Array.


var arr = [1,2,44,66,77,1,2,3,1,1,15,5];

var ans = [...new Set(arr)];

var dec = ans.sort (function(a,b){
           return b-a;      
});

console.log(dec[1]);