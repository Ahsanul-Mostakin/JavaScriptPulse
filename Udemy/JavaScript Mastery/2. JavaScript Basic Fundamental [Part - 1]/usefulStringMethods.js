let str = "   JavaScript is awesome!   ";

let upperStr = str.toUpperCase();
console.log(upperStr); // "   JAVASCRIPT IS AWESOME!   "

let lowerStr = upperStr.toLowerCase();
console.log(lowerStr); // "   javascript is awesome!   "

let subStr = lowerStr.substring(3, 13);
console.log(subStr); // "javascript"

let slicedStr = str.slice(-8);
console.log(slicedStr); // "awesome!"

let trimmedStr = str.trim();
console.log(trimmedStr); // "JavaScript is awesome!"

let index = trimmedStr.indexOf("is");
console.log(index); // 10

let replacedStr = trimmedStr.replace("awesome", "fantastic");
console.log(replacedStr); // "JavaScript is fantastic!"

let wordsArray = trimmedStr.split(" ");
console.log(wordsArray); // ["JavaScript", "is", "awesome!"]

let charAtIndex = trimmedStr.charAt(0);
console.log(charAtIndex); // "J"

let containsAwesome = trimmedStr.includes("awesome");
console.log(containsAwesome); // true
