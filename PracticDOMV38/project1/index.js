let colo = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('click' , function() {
    let em1 = Math.floor(Math.random()*256);
    let em2 = Math.floor(Math.random()*256);
    let em3 = Math.floor(Math.random()*256);

    colo.style.backgroundColor = `rgb(${em1},${em2},${em3})`
})