// ADD TWO INTEGERS

// Given two integers num1 and num2, return the sum of the two integers.


// Example 1:

// Input: num1 = 12, num2 = 5
// Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
// Example 2:

// Input: num1 = -10, num2 = 4
// Output: -6
// Explanation: num1 + num2 = -6, so -6 is returned.


// Constraints:

// -100 <= num1, num2 <= 100

let sumOfTwoIntegers = function (num1, num2) {
    while (num2 !== 0) {
        let sum = (num1 ^ num2)
        let carry = (num1 & num2) << 1

        num1 = sum
        num2 = carry
    } return num1
}

console.log('sum of two integers', sumOfTwoIntegers(12, 4))

// Time Complexity:

// The loop iterates until num2 becomes 0.
// In each iteration, the number of bits in num2 is halved due to the right shift (<< 1) operation.
// The number of bits in a number is roughly proportional to its logarithm (base 2).
// Therefore, the loop iterates approximately log(num2) times.

// Space Complexity:

// The function uses only a constant amount of extra space for variables sum and carry.
// The size of these variables is independent of the input size.
// Hence, the space complexity is O(1).


// Explanation:
// Base Case: If num2 is zero, then the result is simply num1 since adding zero does not change the value.

// Bitwise XOR (sum):

// num1 XOR num2 computes the sum of num1 and num2 without considering the carry.
// This operation sets each bit to 1 if exactly one of the corresponding bits of the operands is 1.
// Bitwise AND and Left Shift (carry):

// (num1 AND num2) << 1 computes the carry.
// num1 AND num2 determines which bits will produce a carry.
// Shifting left by 1 bit aligns the carry for the next higher bit position.
// Recursive Call:

// Call add recursively with the updated values of sum and carry.
// Example
// To illustrate with num1 = 12 and num2 = 5:

// Initial Calculation:

// sum = 12 XOR 5 (binary: 1100 XOR 0101 → 1001 which is 9)
// carry = (12 AND 5) << 1 (binary: 1100 AND 0101 → 0100 which is 4, shifted left by 1 bit → 8)
// Recursive Step:

// Call add(9, 8)

// For 9 XOR 8 (binary: 1001 XOR 1000 → 0001 which is 1)

// For carry = (9 AND 8) << 1 (binary: 1001 AND 1000 → 1000 which is 8, shifted left by 1 bit → 16)

// Call add(1, 16)

// For 1 XOR 16 (binary: 0001 XOR 10000 → 10001 which is 17)
// For carry = (1 AND 16) << 1 (binary: 0001 AND 10000 → 0000 which is 0)
// Since the carry is 0, the result is 17.

// Summary
// This pseudocode provides a way to compute the sum of two integers using bitwise operations and recursion. The core idea is to separate the computation into sum and carry components and then recursively combine them until no carry remains.