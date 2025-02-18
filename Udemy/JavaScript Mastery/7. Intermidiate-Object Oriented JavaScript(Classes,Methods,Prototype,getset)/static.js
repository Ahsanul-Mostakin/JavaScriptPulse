class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// Calling static method without creating an instance of the class
let sum = Calculator.add(5, 3);  // Output: 8
console.log(sum);
