// Using spread operator to clone arrays
const array1 = [1, 2, 3];
const clonedArray = [...array1];
console.log(clonedArray);

// Using spread operator to merge arrays
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Using spread operator to add elements to an array
const extendedArray = [...array1, 4, 5];
console.log(extendedArray);