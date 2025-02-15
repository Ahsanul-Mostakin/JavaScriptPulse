// 1. Function declaration (Traditional Way)

// function greet(name){
//     console.log(`Hello ${name}!`);
//     // return `Hello ${name}`;
// }

// greet('Ahsanul Mostakin');

// console.log(name1);

// 2. Functions Expression

// const greet = function(name){
//     console.log(`Hello ${name}`)
// }

// greet("Mostakin");


// 3. Arrow functions ES6 

//  const greet = (name) => {
//     console.log(`Hello ${name}`);
//  }

//  greet('Mostakin')


// 4. IIFE Immediatly invoked function expression

(function(name){
    console.log(`Hello ${name}`)
})('David');


