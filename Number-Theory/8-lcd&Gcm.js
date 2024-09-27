// LCM and GCD
// Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. The function takes two integers a and b as input and returns a list containing their LCM and GCD.

// Example 1:

// Input: a = 5 , b = 10
// Output: 10 5
// Explanation: LCM of 5 and 10 is 10, while thier GCD is 5.
// Input: a = 14 , b = 8
// Output: 56 2
// Explanation: LCM of 14 and 8 is 56, while thier GCD is 2.
// Expected Time Complexity: O(log(min(a, b))
// Expected Auxiliary Space: O(1)

function gcd(a, b) {
    while (b != 0) {
        let temp = b
        b = a % b
        a = temp
    } return a;
}

function lcm(a, b, gcdValue) {
    return Math.abs(a * b / gcdValue)
}

function lcmAndGcd(a, b) {
    const gcdValue = gcd(a, b);
    const lcmValue = lcm(a, b, gcdValue)
    return [lcmValue, gcdValue]
}

console.log(lcmAndGcd(5, 10));  // Output: [10, 5]
console.log(lcmAndGcd(14, 8));  // Output: [56, 2]

// Time and Space Complexity:
// Time Complexity:

// The GCD computation using the Euclidean algorithm has a time complexity of O(log(min(a,b))).
// The LCM computation involves a multiplication and division, both of which are O(1).
