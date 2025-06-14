// //Count the number of vowels in a string.

// function countVowels(str) {
//     // Initialize a counter variable to store the count of vowels.
//     let count = 0;
//     // Define a regular expression to match vowels (both uppercase and lowercase).
//     const vowelsRegex = /[aeiouAEIOU]/g;
//     // Use the match method to find all vowels in the string.
//     const matches = str.match(vowelsRegex);
//     // If matches are found, set the count to the length of the matches array.
//     if (matches) {
//         count = matches.length;
//     }
//     // Return the count of vowels.
//     return count;
// }
// // Example usage:
// console.log(countVowels("Hello, World!")); 
// console.log(countVowels("JavaScript is awesome!")); 

//<<<<<<<<<<<<method 2>>>>>>>>>>>>>>>>>>>>

let str = "Hll, Wrld!";
let regexForVowel = /[aeiouAEIOU]/g; 
let count = (str.match(regexForVowel) || []).length;
console.log(count);