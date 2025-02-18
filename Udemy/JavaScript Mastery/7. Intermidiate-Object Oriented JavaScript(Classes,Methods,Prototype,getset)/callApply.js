// Example 1: Using call()
const person1 = {
    name: 'Alice'
  };
  
  function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
  greet.call(person1, 'Hello', '!'); // Output: Hello, Alice!
  
  // Example 2: Using apply()
  const person2 = {
    name: 'Bob'
  };
  
  greet.apply(person2, ['Hi', '.']); // Output: Hi, Bob.
  
  // Example 3: Using call() to find max number
  const maxUsingCall = Math.max.call(null, 3, 5, 9, 1);
  console.log('Max using call:', maxUsingCall); // Output: 9
  
  // Example 4: Using apply() to find max number
  const numbers = [3, 5, 9, 1];
  const maxUsingApply = Math.max.apply(null, numbers);
  console.log('Max using apply:', maxUsingApply); // Output: 9
  