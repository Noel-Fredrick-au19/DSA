function powerOfFour(n) {
    if (n <= 0) return false;
    if (n == 1) return true;
    // return powerOfFour(n % 4 === 0 ? true : false)
    return n % 4 === 0 && powerOfFour(n / 4)
}

console.log(powerOfFour(15)) // true