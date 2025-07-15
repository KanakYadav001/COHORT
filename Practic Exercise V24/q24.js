//Make a counter using Closures Function .

function count(){
    let counter =0 ;
    return function(){
        counter++;
        console.log(counter);
    }
}


let ans = count();
ans();
ans();
ans();
ans();
ans();
ans();