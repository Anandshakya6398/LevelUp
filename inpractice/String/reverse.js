let str = "Hello, World!";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr); // Output: !dlroW ,olleH

// convert to uppercase
// let upperStr = str.toUpperCase();
// console.log(upperStr); // Output: HELLO, WORLD!

// // convert to lowercase
// let lowerStr = str.toLowerCase();   
// console.log(lowerStr); // Output: hello, world!

// // replace a substring
// let replacedStr = str.replace("Hello", "JavaScript");
// console.log(replacedStr); // Output: JavaScript, World!

// find the index of a substring
let index = str.indexOf("World");
console.log(index); 

// check if a string contains a substring
// let contains = str.includes("World");
// console.log(contains); // Output: true

// split a string into an array
let wordsArray = str.split(" ");
console.log(wordsArray); // Output: [ 'Hello,', 'World!' ]

// join an array into a string
let joinedStr = wordsArray.join(" ");
console.log(joinedStr); // Output: Hello, World!

// trim whitespace from a string
let whitespaceStr = "   Hello, World!   ";
let trimmedStr = whitespaceStr.trim();
console.log(trimmedStr); // Output: Hello, World!

// repeat a string
let repeatedStr = str.repeat(2);
console.log(repeatedStr); // Output: Hello, World!Hello, World!

