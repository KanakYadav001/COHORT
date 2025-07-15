//Implement your own version of '.map()' as a higher-order function.

let arr = [1,2,3,4,5,6];

function hap(ar,fun){
    let newarr = [];
 
    for(let i =0 ; i<ar.length ; i++){
        newarr.push(fun(ar[i]));
    }

    return newarr;
}

 let ans =hap(arr,function(value){
    return value +3;
})

console.log(ans);