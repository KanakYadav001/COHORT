let people = [
  {
    name: "Aarav Mehta",
    age: 24,
    available: "available",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    hour : "$30/hr"
  },
  {
    name: "Diya Kapoor",
    age: 21,
    available: "Not available",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    hour : "$20/hr"
  },
  {
    name: "Rohan Singh",
    age: 27,
    available: "available",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
     hour : "$25/hr"
  },
  {
    name: "Ananya Sharma",
    age: 23,
    available: "Not available",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
     hour : "$30/hr"
  },
  {
    name: "Vikram Joshi",
    age: 30,
    available: "available",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
     hour : "$21/hr"
  }
];

let data = ""

people.forEach((ele,indx)=> {
    data += `<div class="card">
        <div class="header">
            <button>${ele.available}</button>
            <h3>${ele.hour}</h3>
        </div>
        <div class="user">
            
                <img src="${ele.image}" alt="">
           
            
            <h1>${ele.name}</h1>
            <h4>UI/UX designer</h4>
        </div>
        <div class="service">
            <div>UI</div>
            <div>UX</div>
            <div>photoshop</div>
            <div class="extra">+4</div>
        </div>

        <p>Wade is ${ele.age} years old UI/UX designer, with an impressive porfolio behind him.</p>
       <hr>
        <button class="btn" id="${indx}">Add Friend</button>
    </div>`
});


let body = document.querySelector('body');
let btn = document.querySelector('.btn');



body.addEventListener('click',function(dets) {
    body.innerHTML = data;
   

})