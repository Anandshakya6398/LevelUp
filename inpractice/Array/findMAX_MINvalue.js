
const getSmallestValue = (arr1) => {
    return arr1.reduce((smallNum, num) => Math.min(smallNum, num));
};

const arr1 = [0, 1, 4, 6, 3, 7, 2];
console.log(getSmallestValue(arr1)); // Output: 1


// second method >>>>>>>>>>>>>>>>>>>>>>.
const arr = [5, 3, 9, 1, 7];
const smallest = Math.min(...arr);
console.log(smallest);


// <<<<<<find max >>>>>>>>>>
console.log("maximum value")
const arr2 = [5, 3, 9, 1, 7];
const largest = Math.max(...arr2);
console.log(largest);

// second method >>>>>>>>>>>>>>>>>>>>>>.
// find largest value in array 
console.log("maximum value method 2")
const getLargestValue = (arr3) => {
    let largestvalue =arr[0] ;
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > largestvalue) {
            largestvalue = arr3[i];
        }
    }
    return largestvalue;
};
const arr3 = [5, 3, 9, 1, 7];
console.log(getLargestValue(arr3)); // Output: 9

// find the minimum value in array
// console.log("minimum value method 2")
// const getMinimumValue = (arr4) => {

