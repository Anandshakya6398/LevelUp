//  find consonants in a string

// let myString = "HelloWorld";
// let regexForConsonant = /[^aeiou]/gi; // Matches all consonants (both uppercase and lowercase)
// let consonants = (myString.match(regexForConsonant) || []).length; // Find all consonants, default to empty array if none found
// console.log(consonants); 


// how to handle white space in string 
let stringWithSpaces = "Hello World";
let regexForConsonantWithSpaces = /[^aeiou\s]/gi; // Matches all consonants, ignoring spaces
let consonantsWithSpaces = (stringWithSpaces.match(regexForConsonantWithSpaces) || []).length;
console.log(consonantsWithSpaces); 
