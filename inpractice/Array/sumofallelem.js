//sum of all elements in an array
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum)

// Using a for loop
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total); 

// Using a forEach loop
let totalForEach = 0;
numbers.forEach(num => {
    totalForEach += num;
});
console.log(totalForEach); 