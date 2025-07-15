function callback(fun) {
    let executed = false ;

    return function() {
        if(!executed) {
            fun();
            executed = true ;
        }
        else {
            console.warn("This is only run once");
        }
    }
}

let run  = callback(function() {
    console.log("Hello");
})


run();
run();
run();