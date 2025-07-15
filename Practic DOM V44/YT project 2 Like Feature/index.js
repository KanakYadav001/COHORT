let box = document.querySelector('.box');
let love = document.querySelector('i');

box.addEventListener('dblclick',function() {
    love.style.opacity = 0.8
    love.style.scale = 1.5

    setTimeout(function() {
 love.style.opacity = 0;
    },900)

})