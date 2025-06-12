const inputArray = [1, 2, [6, 7], [9, 10, 11, [12, 3]], 4, 5];
 // Output: [1, 2, 6, 7, 9, 10, 11, 12, 3, 4, 5]

function flattenArrayUtil(inputArray) { // Function to flatten an array

    const result = []; // Initialize an empty array to hold the flattened result
    for (let idx = 0; idx < inputArray.length; idx++) {
        const element = inputArray[idx];
        const isArray = Array.isArray(element); // Check if the current element is an array
        if (!isArray) {
            // If the element is not an array, push it directly to the result
            result.push(element);
        }
        else {
            const flattenedElement = flattenArrayUtil(element);
            result.push(...flattenedElement); // Spread operator to flatten nested arrays
        }
    }
    return result;
}
// Test the function
const flattenedArray = flattenArrayUtil(inputArray); 
// Call the function with the input array
console.log("flattend Array", flattenedArray);