// Sets only store unique valus

const mySet = new Set([1, 2, 3, 4]);

const myArray = Array.from(mySet);
console.log(myArray); // Output: [1, 2, 3, 4]

// Or using spread syntax:
const myArray2 = [...mySet];
console.log(myArray2); // Output: [1, 2, 3, 4]
