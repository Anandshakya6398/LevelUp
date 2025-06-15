// <<<<<<<<<>>>>>>>>>>>>>>effecient way to remove the duplicates from a string <<<<<<<<<<<<<<<<<>>>>>>>>>
function removeDuplicatesEfficient(str) {
    const seen = new Set(); // Using a Set to track seen characters
    let result = '';
    for (let char of str) { // Iterate through each character in the string
        if (!seen.has(char)) { // If the character is not in the Set
            seen.add(char); // Add it to the Set
            result += char; // Append it to the result string
        }
    }
    return result; // Return the result string with duplicates removed
}
// Example usage of the efficient function
const inputStringEfficient =  "abcd    efghj";
const outputStringEfficient = removeDuplicatesEfficient(inputStringEfficient);
console.log(outputStringEfficient); // Output: "helo wrd"
// This efficient approach has a time complexity of O(n) and space complexity of O(n)

//<<<>>>>>methode 2<<<<<<<>>>>>>>>>>>>>>>>>

//Remove all duplicates from a string
function removeDuplicates(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) { // Iterate through each character in the string
        // If the character is not already in the result, add it
        // to the result string
        // Using indexOf to check if the character is already in the result
        // This is a simple way to remove duplicates from a string
        // This approach maintains the order of characters
        // in the original string
        // Time complexity: O(n^2) in the worst case
        // Space complexity: O(n) for the result string
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;

}
// Example usage
const inputString = "abcd    efghj";
const outputString = removeDuplicates(inputString);
console.log(outputString); 

