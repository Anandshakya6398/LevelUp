// by using for loop 
// const arr = [1, 2,[6,7,[9,10],], 4, 5];
// const arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr1[i] = arr[i];
// }
// console.log(arr1); // Output: [ 1, 2, [ 6, 7, [ 9, 10 ] ], 4, 5 ]
// arr1[0] = 100;
// console.log(arr1); // Output: [ 100, 2, [ 6, 7, [ 9, 10 ] ], 4, 5 ]
// console.log(arr); // Output: [ 1, 2, [ 6, 7, [ 9, 10 ] ], 4, 5 ]

let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
}
let personCopy = { ...person }; // Shallow copy using spread operator
console.log(personCopy); 
// Output: { name: 'John', age: 30, occupation: 'Developer', address: { street: '123 Main St', city: 'New York', country: 'USA' } } 
personCopy.name = 'Jane'; // Modifying the name property
console.log(personCopy.name); // Output: Jane
console.log(person.name); // Output: John (original object remains unchanged)
personCopy.address.city = 'Los Angeles'; // Modifying a nested property
console.log(personCopy.address.city); // Output: Los Angeles
console.log(person.address.city); // Output: Los Angeles (nested object is still a reference)
// personCopy.address is a shallow copy, so modifying nested properties affects the original object

// 1.) spread operator
let arr = [1, 2, 3, 4, 5];
let arrCopy = [...arr]; // Shallow copy using spread operator
console.log(arrCopy); // Output: [1, 2, 3, 4, 5]
arrCopy[0] = 100; // Modifying the first element
console.log(arrCopy); // Output: [100, 2, 3, 4, 5]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
// 2.) Array.from
let arr2 = [6, 7, 8, 9, 10];
let arr2Copy = Array.from(arr2); // Shallow copy using Array.from
console.log(arr2Copy); // Output: [6, 7, 8, 9, 10]
arr2Copy[0] = 200; // Modifying the first element
console.log(arr2Copy); // Output: [200, 7, 8, 9, 10]
console.log(arr2); // Output: [6, 7, 8, 9, 10] (original array remains unchanged)
// 3.) object.assign
let obj = { a: 1, b: 2, c: 3 };
let objCopy = Object.assign({}, obj); // Shallow copy using Object.assign
console.log(objCopy); // Output: { a: 1, b: 2, c: 3 }
objCopy.a = 100; // Modifying the 'a' property
console.log(objCopy); // Output: { a: 100, b: 2, c: 3 }
console.log(obj); // Output: { a: 1, b: 2, c: 3 } (original object remains unchanged)
