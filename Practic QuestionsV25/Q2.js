function greet(greeting){
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

let indiagreeting = greet("Namasta");
indiagreeting("Kanak");
indiagreeting("Harsh");
indiagreeting("Anurag");

let spanishgreeting  = greet("Hola");
spanishgreeting("Krishna");