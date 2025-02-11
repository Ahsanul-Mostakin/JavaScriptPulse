let age = 20;
let hasPermission = true;

if (age >= 18) {
  if (hasPermission) {
    console.log("You are an adult and have permission.");
  } else {
    console.log("You are an adult but don't have permission.");
  }
} else {
  console.log("You are a minor.");
}
