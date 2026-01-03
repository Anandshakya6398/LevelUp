console.log("---------------method 1----------------");
function isPrime(Num) {
    for (let i = 2; i <= Num/2; i++) {
        if (Num % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // Is a prime number
}
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false


// methode 2
console.log("--------------------method 2----------------");
function checkPrime(num) {
    if (num <= 1) return false; // numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // Is a prime number
}
console.log(checkPrime(11)); // true
console.log(checkPrime(15)); // false