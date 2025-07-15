let p = document.querySelector('p');
let but = document.querySelector('button');

let tap = 0 ;
but.addEventListener('click',function() {
    if(tap==0){
    but.innerHTML = 'Unfriend';
    
    p.style.color = 'lime';
    tap =1 ;
    }
    else {
          but.innerHTML = 'Follow';
    
    p.style.color = 'red';
    tap =0 ;
    }
})