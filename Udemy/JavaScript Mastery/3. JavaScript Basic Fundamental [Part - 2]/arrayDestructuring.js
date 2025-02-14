/* Example 1: Basic Destructuring */
let fruits = ["Apple", "Banana", "Mango"];
let [first, second, third] = fruits;
console.log(first);  // Apple
console.log(second); // Banana
console.log(third);  // Mango

/* Example 2: Skipping Values */
let colors = ["Red", "Green", "Blue"];
let [firstColor, , thirdColor] = colors;
console.log(firstColor);  // Red
console.log(thirdColor);  // Blue

/* Example 3: Default Values */
let numbers = [10];
let [a, b = 20] = numbers;
console.log(a); // 10
console.log(b); // 20 (default value)

/* Example 4: Swapping Variables */
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x); // 10
console.log(y); // 5

/* Example 5: Rest Operator (Collect Remaining Values) */
let scores = [80, 90, 100, 70, 60];
let [firstScore, secondScore, ...rest] = scores;
console.log(firstScore);  // 80
console.log(secondScore); // 90
console.log(rest);   // [100, 70, 60]
