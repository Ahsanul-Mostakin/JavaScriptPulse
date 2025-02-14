let smiles = ["😊", "😂", "😍", "😎", "😢"];

// Using for loop
for (let i = 0; i < smiles.length; i++) {
  console.log(smiles[i]);
}

// Using for...of loop
for (let smile of smiles) {
  console.log(smile);
}

// Using forEach() method
smiles.forEach(function(smile) {
  console.log(smile);
});

// Using map() method (Creating a new array with extra text)
let smileMessages = smiles.map(function(smile) {
  return `Smile: ${smile}`;
});
console.log(smileMessages);

// Using while loop
let i = 0;
while (i < smiles.length) {
  console.log(smiles[i]);
  i++;
}

// Using do...while loop
i = 0;
do {
  console.log(smiles[i]);
  i++;
} while (i < smiles.length);

// Using for...in loop
for (let index in smiles) {
  console.log(smiles[index]);
}
