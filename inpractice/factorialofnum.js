console.log("---------------method 1----------------");
function factorialOfNum(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i; // Multiply factorial by the current number
    }
    return factorial; // Return the computed factorial
}

console.log(factorialOfNum(5));

// methode 2 using recursion
console.log("--------------------method 2----------------");
function factorialRecursive(num) {
    if (num === 0 || num === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    return num * factorialRecursive(num - 1); // Recursive case
}
console.log(factorialRecursive(5));
console.log(factorialRecursive(0));