function abc(fun,time){
  setInterval(fun,time*1000);
}

abc(function(){
  console.log("Hello World");
},3)