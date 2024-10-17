/**
We define super digit of an integer x using the following rules:

Given an integer, we need to find the super digit of the integer.

If x has only  digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

here n=148 and k=3 so p=148148148
super_digit(P) = super_digit(148148148) 
               = super_digit(1+4+8+1+4+8+1+4+8)
               = super_digit(39)
               = super_digit(3+9)
               = super_digit(12)
               = super_digit(1+2)
               = super_digit(3)
               = 3
 */

// Function to calculate the super digit
function superDigit(n, k) {
    // Step 1: Find the initial sum of digits of n
    let digitSum = n.split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    // Step 2: Multiply the digit sum by k (since we repeat the number k times)
    let totalSum = digitSum * k;

    // Step 3: Recursively find the super digit of the total sum
    return findSuperDigit(totalSum);
}

function findSuperDigit(x) {
    // Base case: if the number has only one digit, return that digit
    if (x < 10) {
        return x;
    }

    // Recursive case: sum the digits of x
    let sumOfDigits = x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    return findSuperDigit(sumOfDigits);
    
}

// Example usage:
const n = '148';
const k = 3;

const result = superDigit(n, k);
console.log('Super Digit:', result); // Expected Output: 3







