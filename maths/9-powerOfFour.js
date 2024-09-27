
// https://getsdeready.com/courses/design-dsa-combined/lesson/power-of-four-3/ 
let isPowerOffFour = (n) => {
    return (n & (n - 1)) === 0 && n % 3 === 1
}


console.log(isPowerOffFour(16))
console.log(isPowerOffFour(22))

/**
Time Complexity:
O(N), where N is the number of digits, because we may need to iterate through the entire array.
Space Complexity:
O(1) additional space, except for the input and output arrays.
 */