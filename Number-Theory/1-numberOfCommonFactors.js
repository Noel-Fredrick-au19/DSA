// 2427. Number of Common Factors
// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.



// Example 1:

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
// Example 2:

// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.



// Brutforce approach
var commonFactors = function (a, b) {
    let count = 0;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            console.log('numbers that have common factor', i)
            count++;
        }
    }
    return count;
}

// console.log(commonFactors(12, 6))


// Optimal Approach using GCD
var commonFactorsWIthGCD = function (a, b) {
    // function gcd(x, y) {
    //     while (y !== 0) {
    //         let temp = y
    //         y = x % y
    //         x = temp
    //         // console.log('xxxx', x)
    //     } return x
    // }
    let GCD = function (a, b) {
        if (b === 0) return a
        while (a !== 0) {
            return GCD(b, a % b)
        }
    }
    console.log('GCD', GCD(270, 192)) //GCD is 6 or common highest factor is 6


    let gcdValue = GCD(a, b)
    let count = 0;
    for (let i = 1; i <= gcdValue; i++) {
        if (a % i === 0 && b % i === 0) {
            console.log('numbers that have common factor with GCD', i)
            count++
        }
    } return count;
}
console.log('commonFactorsWIthGCD', commonFactorsWIthGCD(270, 192)) //TOTAL count are 1,2,3,6 so sum is 4


// TIme complexity for the optimal approach is O(9 * 2^n) because we are trying all the possible comibinations of digits for each positions in the numnber

// Space Complexity is 2^n numberes, where n is the lenght of the number.

