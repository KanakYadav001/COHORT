//implement  a function that throttles another function (HOF + Closures).

function throtal(fun,delay) {
    let lastcall = 0 ;
    return function() {
      let current = Date.now();
      if(current - lastcall >= delay){
          lastcall = current;
          fun();
      }
    }
}

let call = throtal(function(){
  console.log("Run In 2 Second");
},2000)

call();