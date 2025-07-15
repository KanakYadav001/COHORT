let arr = [1,,6,7,5,4,9,8,7,6,55,66,77];

let ar = [...new set(arr)] ;

let ans = ar.sort(function(a,b){
    return b -a ;
});

console.log(ans[1]);