// Example of Object Destructuring in JavaScript

const user = {
    name: 'Alice',
    age: 25,
    location: 'New York',
    profession: 'Developer'
};

// Destructuring assignment
const { name, age, location, profession } = user;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Location: ${location}`);
console.log(`Profession: ${profession}`);

// Destructuring with default values
const { country = 'USA' } = user;
console.log(`Country: ${country}`);

// Destructuring with a different variable name
const { name: userName, age: userAge } = user;
console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);

// Nested object destructuring
const person = {
    id: 1,
    info: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

const { info: { firstName, lastName } } = person;
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
