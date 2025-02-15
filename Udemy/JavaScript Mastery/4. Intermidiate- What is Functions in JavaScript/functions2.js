function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(4, 5);
  console.log(result); 


  function introduce(name, country) {
    console.log("Hello, my name is " + name + " and I am from " + country + ".");
  }
  
  introduce("Ahsanul Mostakin", "Bangladesh"); 

  function greetPerson(name) {
    console.log("Hello, " + name + "!");
  }
  
  greetPerson("Ahsanul Mostakin"); 


  function greet(name = "Ahsanul Mostakin", age = 25) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  }
  
  greet(); 
  greet("John", 30);