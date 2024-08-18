// REPEATING GCD

// Given three  integers N, x and y, a number A is formed by repeating N x times and another number B is formed by repeating N y times. You need to find the GCD(A,B). 

// Example 1:

// Input: N = 1, x = 1, y = 1
// Output: 1
// Explanation: A = 1, B = 1, GCD(1, 1)  = 1

// Example 2:

// Input: N = 2, x = 2, y = 3
// Output: 2
// Explanation: A = 22, B = 222, GCD(22, 222) = 2

function gcd(a, b) {
    if (b === 0) return a
    return (b, a % b)
}

function gcdOfStrings(N, x, y) {
    let gcdRepeation = gcd(x, y)
    return N.repeat(gcdRepeation)
}

// Example usage
let N1 = "1", x1 = 2, y1 = 3;
console.log(gcdOfStrings(N1, x1, y1)); // Output: "1"

let N2 = "2", x2 = 3, y2 = 4;
console.log(gcdOfStrings(N2, x2, y2)); // Output: "2"