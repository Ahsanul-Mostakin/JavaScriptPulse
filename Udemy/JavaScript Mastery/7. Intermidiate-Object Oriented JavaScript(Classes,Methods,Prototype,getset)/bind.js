const person = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const greetFunc = person.greet;
  greetFunc(); // Undefined or error because 'this' is not 'person'
  
  const boundGreet = person.greet.bind(person);
  boundGreet(); // Outputs: Hello, my name is Alice
  