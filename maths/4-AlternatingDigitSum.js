// https://getsdeready.com/courses/design-dsa-combined/lesson/alternating-digit-sum-2/
/**
2544. Alternating Digit Sum
Solved
Easy
Topics
Companies
Hint
You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.
Each other digit has an opposite sign to its adjacent digits.
Return the sum of all digits with their corresponding sign.
 */
let alternateDigitSum = (n) => {
    let sign = 1;
    let res = 0;
    for (let char of n.toString()) {
        res += sign * parseInt(char);
        sign *= -1
    }
    return res;
}

// console.log(alternateDigitSum(521))

let alternateDigitSums = (n) => {
    let ans = 0
    while (n) {
        ans = -ans + n % 10
        n = Math.floor(n / 10)
    }
    return ans
};

console.log(alternateDigitSums(521))