//implement a function that returns a function with a preset greeting (closure).

function greet(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

let card = greet("Hello");

card("Kanak");
card("Vaibhav");
card("Shubham");
card("Manthan");