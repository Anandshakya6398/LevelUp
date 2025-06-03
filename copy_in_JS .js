// for primitive types, JavaScript uses pass by value , and for objects, it uses pass by reference. This means that when you pass an object to a function or assign it to another variable, you are passing a reference to the original object, not a copy of it. This can lead to unintended side effects if you modify the object through the new reference.
// In JavaScript, arrays are a type of object, so they are also passed by reference.
// This means that when you assign an array to another variable, you are creating a reference to the original array, not a copy of it.
// Let's demonstrate this with an example:

const a=10;
const b = a; // b is a copy of a, not a reference
console.log(b); // 10       
// If you modify b, a will not be affected
console.log(a); // 10

const arr = [1, 2,[6,7,[9,10],], 4, 5];
const arr2 = arr;
console.log(arr2);
console.log(arr) // [1, 2, 3, 4, 5]
// arr2 is a reference to arr, not a copy
// If you modify arr2, arr will also be modified
arr2[0] = 100;
console.log(arr2); // [100, 2, [6, 7, [9, 10]], 4, 5]
console.log(arr); // [100, 2, [6, 7, [9, 10]], 4, 5]
// To create a copy of an array, use the spread operator or Array.from
const arr3 = [...arr]; // Using spread operator
const arr4 = Array.from(arr); // Using Array.from   
console.log("arr3 is" , arr3); // [100, 2, [6, 7, [9, 10]], 4, 5]
console.log("arr4 is" , arr4); // [100, 2, [6, 7, [9, 10]], 4, 5]
// Both arr3 and arr4 are shallow copies of arr
// This means that if the array contains nested arrays or objects,
// the nested arrays or objects will still be references to the original ones
// To create a deep copy of an array, you can use JSON methods
const arr5 = JSON.parse(JSON.stringify(arr));
console.log("arr5 is" ,arr5); // [100, 2, [6, 7, [9, 10]], 4, 5]
// Now arr5 is a deep copy of arr, so modifying arr5 won't affect arr   
arr5[0] = 200;
console.log("arr5 is", arr5); // [200, 2, [6, 7, [9, 10]], 4, 5]
console.log(arr); // [100, 2, [6, 7, [9, 10]], 4, 5]
// Note: JSON methods only work with JSON-serializable data
// If the array contains functions, undefined, or symbols, they will be lost in the process
// For more complex structures, consider using libraries like Lodash for deep cloning
// Example of using Lodash for deep cloning
// const _ = require('lodash');
// const arr6 = _.cloneDeep(arr);
// console.log(arr6); // [100, 2, [6, 7, [9, 10]], 4, 5]
// arr6 is a deep copy of arr, so modifying arr6 won't affect arr
// arr
// 6[0] = 300;
// console.log(arr6); // [300, 2, [6, 7, [9, 10]], 4, 5]
// console.log(arr); // [100, 2, [6, 7, [9, 10]], 4, 5]
// Conclusion: Use the spread operator or Array.from for shallow copies,
// and JSON methods or libraries like Lodash for deep copies.
// Remember that shallow copies are sufficient for flat arrays,
// but deep copies are necessary for nested structures to avoid unintended side effects.
// Note: The above code is a demonstration of shallow and deep copying in JavaScript.
// It is not meant to be executed as a complete program.
// The comments explain the concepts of shallow and deep copying in JavaScript arrays.
// The code demonstrates how to create shallow and deep copies of arrays in JavaScript.
// It also shows how modifying the copied arrays affects the original array.
// The code is structured to illustrate the differences between shallow and deep copying
// and how to handle nested arrays and objects.
