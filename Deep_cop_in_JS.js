// 1.) structured clone 
const arr = [1, 2, [6, 7, [9, 10]], 4, 5];
const arrCopy = structuredClone(arr); // Deep copy using structured clone
console.log(arrCopy); // Output: [1, 2, [6, 7, [9, 10]], 4, 5]
arrCopy[0] = 100; // Modifying the first element
console.log(arrCopy); // Output: [100, 2, [6, 7, [9, 10]], 4, 5]
console.log(arr); // Output: [1, 2, [6, 7, [9, 10]], 4, 5] (original array remains unchanged)
