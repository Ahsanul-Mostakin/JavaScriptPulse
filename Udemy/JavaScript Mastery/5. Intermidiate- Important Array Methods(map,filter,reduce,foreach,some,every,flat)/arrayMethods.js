// 1. find() method
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log('find():', found); // Output: 12

// 2. reverse() method
const arr = [1, 2, 3, 4];
arr.reverse();
console.log('reverse():', arr); // Output: [4, 3, 2, 1]

// 3. fill() method
const fillArray = [1, 2, 3, 4];
fillArray.fill(0, 1, 3);
console.log('fill():', fillArray); // Output: [1, 0, 0, 4]

// 4. splice() method
const colors = ['red', 'blue', 'green'];
colors.splice(1, 1, 'yellow', 'purple');
console.log('splice():', colors); // Output: ['red', 'yellow', 'purple', 'green']

// 5. some() method
const hasEven = numbers.some(num => num % 2 === 0);
console.log('some():', hasEven); // Output: true

// 6. every() method
const allGreaterThan3 = numbers.every(num => num > 3);
console.log('every():', allGreaterThan3); // Output: true

// 7. push() method
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log('push():', fruits); // Output: ['apple', 'banana', 'orange']

// 8. pop() method
fruits.pop();
console.log('pop():', fruits); // Output: ['apple', 'banana']

// 9. shift() method
fruits.shift();
console.log('shift():', fruits); // Output: ['banana']

// 10. unshift() method
fruits.unshift('apple');
console.log('unshift():', fruits); // Output: ['apple', 'banana']

// 11. map() method
const doubled = numbers.map(num => num * 2);
console.log('map():', doubled); // Output: [10, 24, 16, 260, 88]
