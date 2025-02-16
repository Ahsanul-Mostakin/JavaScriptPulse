const fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.sort();
console.log('Sorted fruits (alphabetically):', fruits);
// Output: ['apple', 'banana', 'mango', 'orange']

const numbers1 = [5, 2, 9, 1, 4];
numbers1.sort();
console.log('Sorted numbers (default, lexicographically):', numbers1);
// Output: [1, 2, 4, 5, 9]

const numbers2 = [5, 2, 9, 1, 4];
numbers2.sort((a, b) => a - b);
console.log('Sorted numbers (ascending):', numbers2);
// Output: [1, 2, 4, 5, 9]

const numbers3 = [5, 2, 9, 1, 4];
numbers3.sort((a, b) => b - a);
console.log('Sorted numbers (descending):', numbers3);
// Output: [9, 5, 4, 2, 1]

const fruits2 = ['banana', 'apple', 'orange', 'mango'];
fruits2.sort((a, b) => b.localeCompare(a));
console.log('Sorted fruits (reverse alphabetical):', fruits2);
// Output: ['orange', 'mango', 'banana', 'apple']
