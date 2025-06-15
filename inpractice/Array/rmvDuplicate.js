// remove duplicate elements from an array
function removeDuplicates(arr) {
    const uniqueElements = new Set(arr);
    return Array.from(uniqueElements);
    }
// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 


//<<<<<<<method 2>>>>>>>>>>>>>
let num = [1, 2, 2, 3, 4, 4, 5, 7, 5];

// Using Set
let unique = [...new Set(num)];
console.log(unique); 
