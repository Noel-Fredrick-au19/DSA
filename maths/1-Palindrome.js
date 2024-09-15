let isPalindrome = (x) => {
    let n = x;
    let rev = 0;
    while (n !== 0) {
        rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    return n >= 0 && rev === x
}

console.log(isPalindrome(123)) // true
