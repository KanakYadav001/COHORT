let btn = document.querySelector('button') ;
let fri = document.querySelector('h2');

let flag =0 ;

btn.addEventListener('click',function() {
    if(flag==0) {
        fri.innerHTML = "Friends"
        fri.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        flag= 1
    }

    else {
         fri.innerHTML = "Stranger"
        fri.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        flag =0
    }
})