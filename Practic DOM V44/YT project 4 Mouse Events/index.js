let ele = document.querySelectorAll('.ele');
// let img  = document.querySelector('.img')

// ele.addEventListener('mouseenter',function() {
//     img.style.opacity = 1 ;
    
// })
// ele.addEventListener('mouseleave',function() {
//     img.style.opacity = 0 ;
    
// })
// ele.addEventListener('mousemove',function(dets) {
//    img.style.top = dets.y+"px";
//     img.style.left = dets.x+"px";
    
// })
console.log(ele);

ele.forEach(function(val) {
    val.addEventListener('mouseenter',function() {
        val.childNodes[3].style.opacity = 1 ;

    })

    val.addEventListener('mouseleave',function() {
        val.childNodes[3].style.opacity = 0 ;
    })

    val.addEventListener('mousemove',function(dets){
       val.childNodes[3].style.left = dets.x+"px" ;
    })
});

