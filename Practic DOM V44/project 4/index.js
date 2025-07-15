let h = document.querySelector('h1');


h.addEventListener('mouseenter',function() {
    h.style.fontSize = 5+"rem" ;
    h.innerHTML = 'ha bada ho gaya'

   
})

h.addEventListener('mouseleave',function() {
    h.style.fontSize = 2+"rem" ;
 h.innerHTML = 'Hello bhai'
   
})

