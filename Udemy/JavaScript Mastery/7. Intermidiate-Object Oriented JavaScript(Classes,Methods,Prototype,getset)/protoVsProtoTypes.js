function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const person = new Person("Alice");
  person.greet(); // "Hello, my name is Alice"
  