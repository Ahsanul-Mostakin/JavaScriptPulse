function greet([firstName, lastName]) {
    console.log(`Hello, ${firstName} ${lastName}!`);
  }
  
  const names = ["John", "Doe"];
  greet(names);
  
  function greetWithDefaults([firstName = "Guest", lastName = "User"] = []) {
    console.log(`Hello, ${firstName} ${lastName}!`);
  }
  
  greetWithDefaults();
  greetWithDefaults(["Alice"]);
  greetWithDefaults(["Bob", "Smith"]);
  
  function display([firstName, , age]) {
    console.log(`${firstName} is ${age} years old.`);
  }
  
  const person = ["Charlie", "Brown", 30];
  display(person);
  