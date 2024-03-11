// STRING MANIPULATION
// 1. Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}

const anotherString = "Howdy";
const anotherReversedString = reverseString(anotherString);
console.log(anotherReversedString); // Output: "ydwoH"

// 2. Counting Characters
function countCharacters(inputString) {
    return inputString.length;
}

const inputString = "JavaScript is awesome!";
const result = countCharacters(inputString);
console.log(`The number of characters in the string is: ${result}`); 
// Outputs:-The number of characters in the string is: 22

// 3. Capitalizing Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const inputSentence = "hello friend";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence); // Output: "Hello Friend"

// Array Functions
// 1. Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

const numbers = [10, 5, 20, 15, 8];
const maxValue = findMax(numbers);
const minValue = findMin(numbers);
console.log(`Maximum value: ${maxValue}`);
console.log(`Minimum value: ${minValue}`);

// 2. Sum of Arrays
const arr = [4, 8, 7, 13, 12];
let totalSum = 0;
for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
}
console.log(`Sum of the array: ${totalSum}`);

// 3. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredNumbers = filterArray(num, (x) => x % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4, 6, 8]

// Mathematical Functions
// 1. Factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const value = 4;
console.log(`The factorial of ${value} is ${factorial(value)}`);
// output : The factorial of 4 is 24

// 2. Prime Numbers
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(37));  // Output: true
console.log(isPrime(36));  // Output: false

// 3. Fibonacci Sequence
function generateFibonacci(numTerms) {
    let n1 = 0, n2 = 1;
    for (let i = 0; i < numTerms; i++) {
        console.log(n1);
        const nth = n1 + n2;
        n1 = n2;
        n2 = nth;
    }
}
const numberOfTerms = 7;
console.log("Fibonacci sequence:");
generateFibonacci(numberOfTerms);

