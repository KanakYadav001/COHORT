let arr = [1,2,3,55,66,77,4,56,789,8];

let ans =[...new Set(arr)].sort(function(a,b){
    return b -a ;
});

console.log(ans);