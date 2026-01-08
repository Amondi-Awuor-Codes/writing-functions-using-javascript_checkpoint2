/*String Manipulation Functions*/


//Reverse a String: Write a function that reverses a given string.
var Str = "AMONDI";
function reverseString (Str) 
{
    return Str.split("").reverse().join("");
}
console.log(reverseString("AMONDI"));



//Count Characters: Create a function that counts the number of characters in a string.
var Count = "AMONDI";
function countValues (Count) 
{
    return Count.length;
}
console.log(countValues("Count"));


//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence)
{
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
            }
    return words.join(" ");
}

console.log(capitalizeWords("hello snakes!")); 



//Array Functions:


//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
let numbers = [4, 7, 1, 9, 2];

console.log("Maximum:", Math.max(...numbers));
console.log("Minimum:", Math.min(...numbers)); 



//Sum of Array: Create a function that calculates the sum of all elements in an array.

var numbers = [4, 5, 6, 7, 7, 8];

function sumArray(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}

console.log(sumArray(numbers)); 

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
var numbers = [3, 7, 2, 9, 4];

var filtered = numbers.filter(function(num)
{
    return num > 5; 
});

console.log(filtered); 




//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i; // 
    }
    return result;
}

console.log(factorial(56)); 


//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    if (num < 2) return false; 
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log(isPrime(11)); 
console.log(isPrime(12)); 


//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function isPrime(num) {
    if (num < 2) return false; 
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log(isPrime(11)); 
console.log(isPrime(12)); 