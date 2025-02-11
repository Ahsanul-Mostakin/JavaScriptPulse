// Concatenation Example
let firstName = "Ahsanul";
let lastName = "Mostakin";
let age = 25;

let fullName = firstName + " " + lastName; // Concatenating first and last name
let personInfo = fullName + " is " + age + " years old."; // Concatenating full name and age

console.log(personInfo); // Output: "Ahsanul Mostakin is 25 years old."

// Template Literals Example
let firstNameTemplate = "Ahsanul";
let lastNameTemplate = "Mostakin";
let ageTemplate = 25;

// Using template literals to concatenate
let personInfoTemplate = `${firstNameTemplate} ${lastNameTemplate} is ${ageTemplate} years old.`; // Embedding variables inside the string

console.log(personInfoTemplate); // Output: "Ahsanul Mostakin is 25 years old."

// Using Template Literals with Expressions
let num1 = 5;
let num2 = 10;

// Using template literals with expressions
let sumInfo = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

console.log(sumInfo); // Output: "The sum of 5 and 10 is 15."
