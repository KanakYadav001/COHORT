//  Sort an array in descending order.

let arr = [1,2,3,1,1,1,4,4,5,5,5,5,6,6,6];

//find unique value

let ans = [...new Set(arr)];

// arrange decending order
let dec = ans.sort(function(a,b){
    return b-a ;
})

    console.log(dec);