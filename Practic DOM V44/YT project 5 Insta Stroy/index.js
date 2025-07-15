let obj = [
    {
        img : "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        str : "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1vZGVsfGVufDB8fDB8fHww"
    },
     {
        img : "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        str : "https://images.unsplash.com/photo-1676576625429-e00537557449?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
    },
     {
        img : "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww",
        str : "https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },
     {
        img : "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsfGVufDB8fDB8fHww",
        str : "https://plus.unsplash.com/premium_photo-1673757121229-b4030607c094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },
     {
        img : "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG1vZGVsfGVufDB8fDB8fHww",
        str : "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
let cluter ="";
obj.forEach(function(val,indx){
    cluter += `<div class="story">
            <img id="${indx}"src="${val.img}" alt="">
        </div>`

})


let storyies =document.querySelector('.stories');
storyies.innerHTML = cluter ; 


storyies.addEventListener('click',function(dets) {
       document.querySelector('.str').style.display = 'block';
       document.querySelector('.str').style.backgroundImage =  `url(${obj[dets.target.id].str})`;
        
       setTimeout(()=>{
          document.querySelector('.str').style.display = 'none';
       },3000)
})

let plike = document.querySelector('.like');
let Plike = document.querySelector('.plike');
let flike = document.querySelector('.flike');

plike.addEventListener('click',function() {
    Plike.style.opacity = 1 ;
     Plike.style.scale = 2 ;
   flike.style.color = 'red';

    setTimeout(function() {
        Plike.style.opacity = 0 ;
    },900)
})
