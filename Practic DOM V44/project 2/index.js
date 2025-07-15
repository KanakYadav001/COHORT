
let but = document.querySelector('button');
let body = document.querySelector('body');
let obj = [
  {
    root : "chutki.png"
  },
   {
    root : "kalia.png"
  },
   {
    root : "bheem.png"
  },
   {
    root : "juggu.png"
  }
];
but.addEventListener('click',function(){
    let num1 = Math.floor(Math.random()*360);
let emg = Math.floor(Math.random()*obj.length);
 let num2 = Math.floor(Math.random()*90);
 let num3 = Math.floor(Math.random()*90);

 let finalimg = obj[emg];
 let img = document.createElement('img');
    img.setAttribute('src',finalimg.root);
    img.style.rotate = num1+'deg' ;
      img.style.top = num2+'%' ;
      img.style.left = num3+'%' ;
    body.appendChild(img) ;

})