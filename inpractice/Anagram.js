// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<method 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//////////////
// function isAnagram(str1, str2) {
//   // Clean and lowercase both strings
// //   str1 = str1.replace(/\s/g, '').toLowerCase();
// //   str2 = str2.replace(/\s/g, '').toLowerCase();

//   // Sort the characters and compare
//   return str1.split('').sort().join('') === str2.split('').sort().join(''); // true if anagram, false otherwise
        
//     // if (str1.length !== str2.length) return false; // Early exit if lengths differ 
//     // const sortedStr1 = str1.split('').sort().join('');
//     // const sortedStr2 = str2.split('').sort().join('');
//     // return sortedStr1 === sortedStr2; // true if anagram, false otherwise 
//     // Note: The above line can be simplified to a single return statement  
//     // return str1.split('').sort().join('') === str2.split('').sort().join(''); // true if anagram, false otherwise
    
// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false
// console.log(isAnagram("123", "321")); // true

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<method 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//////////////

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false; // Early exit if lengths differ
    let count = {};
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1; // Count characters in str1
    }
    for (let char of str2) {
        if (!count[char]) return false; // If char not in count, not an anagram
        count[char]--; // Decrease count for char in str2
        if (count[char] < 0) return false; // If count goes negative, not an anagram
    }
    return true; // If all checks pass, anagram
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
const check  = isAnagram('hello', 'olleh');
console.log(check); // true