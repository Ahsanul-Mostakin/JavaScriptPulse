class Calculator {
    add(a, b, c) {
        if (arguments.length === 1) {
            return a + a;
        } else if (arguments.length === 2) {
            return a + b;
        }else if (arguments.length === 3) {
            return a + b + c;
        } else {
            return "Invalid number of arguments";
        }
    }
}

const calculator = new Calculator();

console.log(calculator.add(5));
console.log(calculator.add(5, 3));
console.log(calculator.add(6, 3, 2));
