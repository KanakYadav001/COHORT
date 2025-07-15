let year = Number(prompt("Enter Number"));
let isleep = false ;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            isleep = true ;
        } else isleep = false;
    } else isleep = true ;
} else isleep = false ;

console.log(isleep?"Leep Year" : "Not a leep year");