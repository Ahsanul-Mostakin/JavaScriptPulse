function multiplyBy(num) {
    return function(x) {
      return x * num;
    };
  }
  
  const multiplyBy2 = multiplyBy(2);
  console.log(multiplyBy2(5)); // Output: 10
  
  const multiplyBy10 = multiplyBy(10);
  console.log(multiplyBy10(3)); // Output: 30
  