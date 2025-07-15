let progress1 = document.querySelector(".progress");
let btn = document.querySelector("button");
let percent2  = document.querySelector(".percent")
let grow =0;
btn.addEventListener('click',function(){
      let int  = setInterval(function(){
        grow++;
        percent2.innerText = grow+"%";
        progress1.style.width = grow+"%" ;
      },50);
     
      setTimeout(() => {
            clearInterval(int)
            btn.style.opacity = 0.5 ;
            btn.innerHTML = "Downloded"
      },5000);

})