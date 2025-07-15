function delayrun(fun,delay) {
    let lastcall = 0 ;
    return function () {
        let current = Date.now();

        if(current - lastcall >= delay) {
            fun();
            lastcall = current;
        }
    }


}

let ans = delayrun(function() {
      console.log("Hello");
},2000)


ans();