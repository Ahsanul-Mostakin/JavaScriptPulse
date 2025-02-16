const numbers = [2, 4, 6, 8, 9];

// Using every() method
const allEven = numbers.every(num => num % 2 === 0);
console.log('Are all numbers even? ', allEven); // Output: false

// Using some() method
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Is there at least one even number? ', hasEven); // Output: true
