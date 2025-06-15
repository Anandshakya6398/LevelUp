// flatten a nested array
let nestedArray = [1, [2, 3], [4, [5, 6, [7, 8,[10,11,[25,50]]]]], 9];
let flattened = nestedArray.flat(Infinity);
console.log(flattened); 

// explain the Infinity value
// The Infinity value in the flat() method indicates that the method should recursively flatten the array to any depth.
// This means that it will continue to flatten nested arrays until there are no more nested arrays left, regardless of how deeply they are nested.  
// This is useful when you don't know the depth of nesting in advance and want to ensure that all elements are brought to a single level.
// time complexity is O(n) where n is the number of elements in the array, as it needs to visit each element at least once.
// The space complexity is also O(n) in the worst case, as it may need to create a new array to hold the flattened elements.
// Note: The flat() method is available in ES2019 and later versions of JavaScript.