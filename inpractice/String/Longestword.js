console.log(findLongetstWord("The quick brown fox jumped over the lazy dog"));
// function findLongetstWord(str) {
//     let words = str.split(' '); // Split the string into an array of words
//     let longestWord = ''; // Initialize a variable to store the longest word
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i]; // Update longestWord if the current word is longer
//         }
//     }
//     return longestWord; // Return the longest word found
// }   

// methode 2 using reduce
function findLongetstWord(str) {
    let words = str.split(' '); // Split the string into an array of words  
    let longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');
    return longestWord; // Return the longest word found
}
