// Using for...in loop to iterate over object properties
const user = {
    id: 101,
    name: 'John Doe',
    email: 'john@example.com'
  };
  
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
  
  // Using for...of loop with Object.keys() to iterate over object keys
  const product = {
    name: 'Laptop',
    price: 1200,
    brand: 'Dell'
  };
  
  for (const key of Object.keys(product)) {
    console.log(`${key}: ${product[key]}`);
  }