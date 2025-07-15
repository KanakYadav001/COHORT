let di = document.querySelector('div');
let h = document.getElementById('h1');
let but = document.querySelector('button')

let obj = [
  {
    team: 'vaibhav',
    pcolor: 'blue',
    scolor : 'yellow'
  },

 {
    team: 'mario',
    pcolor: 'orange',
    scolor : 'blue'
  },
  {
    team: 'yadav',
    pcolor: 'lime',
    scolor : 'yellow'
  },
  {
    team: 'dynamo',
    pcolor: 'red',
    scolor : 'blue'
  },
 {
    team: 'scout',
    pcolor: 'black',
    scolor : 'white'
  },
  {
    team: 'jony',
    pcolor: 'blue',
    scolor : 'red'
  }
];


but.addEventListener('click',function() {
    let num = Math.floor(Math.random()*obj.length);
    let winner = obj[num];
   
    h.innerText = winner.team
    di.style.backgroundColor = winner.pcolor
    h.style.color = winner.scolor

})