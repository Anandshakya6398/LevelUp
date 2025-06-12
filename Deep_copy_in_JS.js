// 1.) structured clone 
const arr = [1, 2, [6, 7, [9, 10]], 4, 5];
const arrCopy = structuredClone(arr); // Deep copy using structured clone
// console.log(arrCopy); // Output: [1, 2, [6, 7, [9, 10]], 4, 5]
arrCopy[0] = 100; // Modifying the first element
// console.log(arrCopy); // Output: [100, 2, [6, 7, [9, 10]], 4, 5]
// console.log(arr); // Output: [1, 2, [6, 7, [9, 10]], 4, 5] (original array remains unchanged)

// 2.) JSON methods
const arr2 = [1, 2, [6, 7, [9, 10]], 4, 5];
const arr2Copy = JSON.parse(JSON.stringify(arr2)); // Deep copy using JSON methods
// console.log(arr2Copy); // Output: [1, 2, [6, 7, [9, 10]], 4, 5]
arr2Copy[0] = 200; // Modifying the first element
// console.log(arr2Copy); // Output: [200, 2, [6, 7, [9, 10]], 4, 5]
// console.log(arr2); // Output: [1, 2, [6, 7, [9, 10]], 4, 5] (original array remains unchanged)

// for object
const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
};
// const personCopy = structuredClone(person); // Deep copy using structured clone
// console.log(personCopy);
// Output: { name: 'John', age: 30, occupation: 'Developer', address: { street: '123 Main St', city: 'New York', country: 'USA' } }
// personCopy.name = 'Jane'; // Modifying the name property
// console.log(personCopy.name); // Output: Jane
// console.log(person.name); // Output: John (original object remains unchanged)
// personCopy.address.city = 'Los Angeles'; // Modifying a nested property
// console.log(personCopy.address.city); // Output: Los Angeles
// console.log(person.address.city); // Output: New York (nested object is still a reference)
// personCopy.address is a deep copy, so modifying nested properties does not affect the original object
// Note: structuredClone is a built-in method in modern browsers and Node.js versions that supports deep cloning of objects and arrays.
// For older environments, you can use JSON methods or libraries like Lodash for deep cloning.

JSON.stringify(person); // Convert object to JSON string
const personJson = JSON.stringify(person); // Convert object to JSON string
const personCopy = JSON.parse(personJson); // Parse JSON string back to object
console.log(personCopy);
// Output: { name: 'John', age: 30, occupation: 'Developer', address: { street: '123 Main St', city: 'New York', country: 'USA' } }
personCopy.name = 'Jane'; // Modifying the name property
console.log(personCopy.name); // Output: Jane
console.log(person.name); // Output: John (original object remains unchanged)
personCopy.address.city = 'Los Angeles'; // Modifying a nested property
console.log(personCopy.address.city); // Output: Los Angeles
console.log(person.address.city); // Output: New York (nested object is still a reference)
