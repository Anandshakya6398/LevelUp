// second largest number in an array

// // <<<<<<<<<<<<<<<<<method 1>>>>>>>>>>>>>>>>>

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let secondLargest = arr.sort((a, b) => b - a)[1];
console.log(secondLargest);

// time complexity is O(n log n) due to the sorting operation, where n is the number of elements in the array.
// The space complexity is O(n) in the worst case, as the sort operation may require additional space for the sorting algorithm.

// <<<<<<<<<<<<<<<<method 2>>>>>>>>>>>>>>>>>>
let arr2 = [1, 9, 3, 4, 5, 6, 7, 8, 2, 10];
let largest = -Infinity; // but why -Infinity?
// -Infinity is used as an initial value to ensure that any number in the array will be larger than this initial value.
// This allows the algorithm to correctly identify the largest and second largest numbers in the array.
let secondLargest2 = -Infinity;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > largest) {
        secondLargest2 = largest;
        largest = arr2[i];
    } else if (arr2[i] > secondLargest2 && arr2[i] !== largest) {
        secondLargest2 = arr2[i];
    }
}
console.log(secondLargest2);
// time complexity is O(n) where n is the number of elements in the array, as it needs to iterate through each element once.
// The space complexity is O(1) since it uses a constant amount of space for the variables largest and secondLargest2, regardless of the size of the input array.


// ><<<<<<<<method 3>>>>>>>>>

function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}

const numbers = [5, 3, 9, 1, 9, 7];
console.log(findSecondLargest(numbers)); // Output: 7
