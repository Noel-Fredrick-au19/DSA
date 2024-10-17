// https://getsdeready.com/courses/design-dsa-combined/lesson/reverse-integer-2/

let reverse = (x) => {
    let isNegative = x < 0
    let n = Math.abs(x); // works with absolute value
    let reverse = 0;
    while (n !== 0) {
        remainder = n % 10;
        n = Math.floor(n / 10)
        reverse = reverse * 10 + remainder;
    }
    if (isNegative) {
        reverse = -reverse;
    }
    if (reverse < -Math.pow(2, 31) || reverse > Math.pow(2, 31) - 1) {
        return 0;  // handles the overflow case for negative numbers and numbers beyond 32-bit integer range.
    }
    return reverse;
}

console.log('reverese a number', reverse(234))
console.log('reverese a number', reverse(-234))
