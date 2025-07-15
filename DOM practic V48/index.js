// let btn = document.querySelector('button');


// btn.addEventListener('click',function(){
//     location.reload() ;
// })

// localStorage.clear();

// localStorage.setItem('user','kanak');


// let data = localStorage.getItem('user');

// console.log(data);



// let obj = [
//     {
//         name : "kanak",
//         lastname : "yadav"
//     },
//     {
//         name : "manthan",
//         lastname : "yadav"
//     },
//     {
//         name : "shubham" ,
//         lastname :" Sharma"
//     },
//     {
//         name : "vaibhav",
//         lastname : "rawat"
//     }
// ]



// let NewObj = JSON.stringify(obj);


// console.log(NewObj)



// localStorage.setItem('user',NewObj);


// let div = document.querySelector('div');

// div.classList.add('circle');


let btn = document.querySelector('button');
let body = document.querySelector('body');

let flag = 0;
btn.addEventListener('click',function() {
    
   if(flag==0) {
    body.classList.remove('white')
       body.classList.add('black')
       flag=1 ;
   }
   else{
    body.classList.remove('black');
    body.classList.add('white');
    flag =0 ;
   }
})