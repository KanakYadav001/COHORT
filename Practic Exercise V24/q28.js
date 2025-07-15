//implement a function that takes a callback and only executes it once (HOF + Closure).

function callone(fun){

    let execute = false ;
    return function() {
        if(!execute){
           execute = true ;
           fun();
        }
        else {
            console.error("Executed One Is Done ");
        }
    }
}
 let call = callone(function(){
    console.log("Hello JS");
})
//Only One Time Run
call();
call();
call();