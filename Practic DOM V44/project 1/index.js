let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let btn  = document.querySelector("button")

btn.addEventListener('click',function(){
    let imga = img1.getAttribute('src');
    let imgb = img2.getAttribute('src');

    img1.setAttribute('src',imgb);
    img2.setAttribute('src',imga);
})