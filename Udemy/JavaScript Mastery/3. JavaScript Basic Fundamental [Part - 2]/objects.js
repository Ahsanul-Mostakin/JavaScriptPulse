const person = {
    name: "Alice",
    age: 25,
    isStudent: false
  };
  
  const car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() {
      console.log("Car is starting...");
    }
  };
  
  const user = {
    id: 1,
    info: {
      name: "John",
      email: "john@example.com"
    }
  };
  
  const book = {
    title: "JavaScript Basics",
    author: "Jane Doe"
  };
  
  console.log(book["title"]);
  
  const product = {};
  product.name = "Laptop";
  product.price = 1000;
  
  console.log(person);
  console.log(car);
  car.start();
  console.log(user);
  console.log(product);
  
 