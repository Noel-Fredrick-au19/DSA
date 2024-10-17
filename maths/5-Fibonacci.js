/** 
509. Fibonacci Number 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/
let fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0
    let b = 1
    let c = 1
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fib(3)); // Output: 2
console.log(fib(5)); // Output: 5
console.log(fib(10)); // Output: 55



// to get in the form of array
let fibInArray = (n) => {
    if (n < 0) return []; // Handle negative input
    if (n === 0) return [0]; // Return array with only the first Fibonacci number
    if (n === 1) return [0, 1]; // Return array with the first two Fibonacci numbers

    let fibArray = [0, 1]; // Initialize the array with the first two Fibonacci numbers
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let c = a + b; // Calculate the next Fibonacci number
        fibArray.push(c); // Add it to the array
        a = b; // Update a to be the previous b
        b = c; // Update b to be the new Fibonacci number
    }

    console.log('Fibonacci sequence:', fibArray); // Log the entire array
    return fibArray; // Return the array of Fibonacci numbers
}

// Example usage:
let result = fibInArray(4); // Call the function with n = 4
console.log(result); // Output: [0, 1, 1, 2, 3]



// Recursive Approach
function fabonaccieRecursive(n){
    if(n <= 1) return n;
    return fabonaccieRecursive(n-1) + fabonaccieRecursive(n-2);
}



console.log(fabonaccieRecursive(10)); // 55