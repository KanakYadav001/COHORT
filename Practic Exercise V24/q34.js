
// calculate discount ;

let pay =  Number(prompt("Enter Your Payment"));
let dis = 0 ;

if(pay>=0 && pay<=5000){
   dis = 0 ;
}
else if (pay>=5000 && pay<=7000){
    dis = 5 ;
}
else if (pay>=7001 && pay<=9000){
    dis = 10;
}
else if(pay>=9001){
    dis = 20 ;
}

else {
    console.log("Not a Valid Amount");

}
console.log(pay-(dis*pay)/100);












//not a good code


// let pay = Number(prompt("Enter You Payment"));

// if(pay >=0 && pay<=5000){
//     console.log(pay);
// }
// else if(pay>=5001 && pay<=7000 ){
//     console.log(pay - (5*pay)/100);
// }
// else if(pay>=7001 && pay<=9000){
//     console.log(pay-(10*pay)/100);
// }

// else if(pay>=10000){
//     console.log(pay-(20*pay)/100);
// }

// else {
//     console.log("Not A Valid Bill !!!");
// }