//calculate compound Interest

let p = Number(prompt("Enter principle"));
let r  =Number(prompt("Enter Rate"));
let t = Number(prompt("Enter Time"));

console.log((p*Math.pow(1+r/100,t)-p));