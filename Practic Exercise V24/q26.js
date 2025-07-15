//Create a function that takes a callback and executes it after every 'n' seconds indefinitely.


function repeatly(fun,time) {
    setInterval(fun,time);

}


repeatly(function(){
    console.log("Hello");
},1000)