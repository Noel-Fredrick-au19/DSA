// For a given number N, find whether it is a factorial number or not. A Factorial number is a number which is equal to the factorial value of other numbers.
 

// Example 1:

// Input:
// N = 6
// Output:
// 1
// Explanation:
// 6 is factorial of 3
// Example 2:

// Input:
// N = 5
// Output:
// 0
// Explanation:
// no number's factorial is 5.

function getFactorialNumber(N) {
    if (N == 1) return 1;

    let factorial = 1;
    let x = 1;

    while (factorial < N) {
        x++
        factorial *= x;
    } return factorial === N ? x : 0
}

console.log(factorial(6));  // Output: 3
console.log(factorial(24)); // Output: 4
console.log(getFactorialNumber(7));  // Output: 0

// Given the rapid growth of factorials, this usually requires Object(log(N)) iterations.
// The space complexity is O(1), meaning it uses a constant amount of space regardless of the input size.
