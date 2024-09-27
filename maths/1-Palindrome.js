// https://getsdeready.com/courses/design-dsa-combined/lesson/palindrome-number-2/
let isPalindrome = (x) => {
    let n = x;
    let rev = 0;
    while (n !== 0) {
        rem = n % 10;
        n = Math.floor(n / 10);
        rev = rev * 10 + rem;
    }
    return n >= 0 && rev === x
}

console.log(isPalindrome(123)) // false
console.log(isPalindrome(121)) // true
