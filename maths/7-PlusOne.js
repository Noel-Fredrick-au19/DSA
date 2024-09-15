/**
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
 */

let plusOne = (digits) => {
    for (i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 9)
            return digits;
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits
}


console.log(plusOne([1, 2, 3]));  // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1]));  // Output: [4, 3, 2, 2]
console.log(plusOne([9, 9, 9]));  // Output: [1, 0, 0, 0]


/**
 * Time Complexity:
O(N), where N is the number of digits, because we may need to iterate through the entire array.
Space Complexity:
O(1) additional space, except for the input and output arrays.
 */