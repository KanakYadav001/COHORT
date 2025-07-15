//implement a function that limits how many times another function can be called (closure  + HOF).


function call(fun,limit) {

    let count = 0 ;
     return function() {
          if(count < limit) {
             count++;
             fun();
     }
   }
 }
 
 let ans = call(function(){
     console.log("Hello JS");
 },4);
 
 ans();
 ans();
 ans();
 ans();
 ans();