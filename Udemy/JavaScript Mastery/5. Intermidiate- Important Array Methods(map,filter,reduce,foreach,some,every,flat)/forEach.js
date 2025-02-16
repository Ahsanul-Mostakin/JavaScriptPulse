// Array of numbers
const numbers = [1, 2, 3, 4];

// 1. Using `for` loop to double the numbers
const doubledUsingFor = [];
for (let i = 0; i < numbers.length; i++) {
  doubledUsingFor.push(numbers[i] * 2);
}
console.log("Using for loop:", doubledUsingFor); // [2, 4, 6, 8]

// 2. Using `forEach` to double the numbers
const doubledUsingForEach = [];
numbers.forEach(num => {
  doubledUsingForEach.push(num * 2);
});
console.log("Using forEach:", doubledUsingForEach); // [2, 4, 6, 8]

// 3. Using `map` to double the numbers
const doubledUsingMap = numbers.map(num => num * 2);
console.log("Using map:", doubledUsingMap); // [2, 4, 6, 8]

