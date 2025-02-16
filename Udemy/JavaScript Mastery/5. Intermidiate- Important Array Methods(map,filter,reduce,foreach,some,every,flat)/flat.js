const arr = [1, 2, [3, 4], [5, [6, 7]]];

const flatArray = arr.flat(2); // Flatten 2 levels deep
console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7]
