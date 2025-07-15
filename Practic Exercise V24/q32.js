//area of triangle using heron's formula

let a = Number(prompt("Enter First Number"));
let b = Number(prompt("Enter Second Number"));
let c = Number(prompt("Enter Third Number "));

if(a+b<=c || a+c<=b || b+c<=a){
    console.log("Not Posssible");

}else{
    let s = a+b+c/2 ;
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
}