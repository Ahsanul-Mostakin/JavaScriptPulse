let numbers = [1, 2, 3, 4, 5];

// push() - Adds an element to the end
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// pop() - Removes the last element
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// unshift() - Adds an element to the beginning
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4, 5]

// shift() - Removes the first element
numbers.shift();
console.log(numbers); // [1, 2, 3, 4, 5]

// concat() - Joins two arrays
let moreNumbers = [6, 7, 8];
let combined = numbers.concat(moreNumbers);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8]

// slice() - Returns a part of the array
let sliced = combined.slice(2, 5);
console.log(sliced); // [3, 4, 5]

// splice() - Adds/Removes elements
combined.splice(2, 1, 10);
console.log(combined); // [1, 2, 10, 4, 5, 6, 7, 8]

// indexOf() - Finds the index of an element
console.log(combined.indexOf(10)); // 2

// includes() - Checks if an element is in the array
console.log(combined.includes(5)); // true

// forEach() - Loops through the array
combined.forEach((num) => console.log(num));

// map() - Creates a new array by applying a function
let doubled = combined.map((num) => num * 2);
console.log(doubled); // [2, 4, 20, 8, 10, 12, 14, 16]

// filter() - Creates a new array with elements that pass a condition
let greaterThanFive = combined.filter((num) => num > 5);
console.log(greaterThanFive); // [10, 6, 7, 8]

// find() - Returns the first element that matches a condition
let firstGreaterThanFive = combined.find((num) => num > 5);
console.log(firstGreaterThanFive); // 10

// reduce() - Reduces the array to a single value
let sum = combined.reduce((total, num) => total + num, 0);
console.log(sum); // 53
