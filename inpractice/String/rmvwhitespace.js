console.log("---------------method 1----------------");
function factorialOfNum(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i; // Multiply factorial by the current number
    }   
    return factorial; // Return the computed factorial
}
console.log(factorialOfNum(5));

