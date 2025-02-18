// This refer to current execution contex
class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person2 = new Person('Mostakin');
  person2.greet(); // 'Hello, my name is Mostakin'
  