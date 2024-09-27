// https://getsdeready.com/courses/design-dsa-combined/lesson/factorial-trailing-zeroes-2/
let trailingZeros = (n) => {
    let count = 0
    while (n !== 0) {
        n = Math.floor(n / 5)
        count = count + n
    }
    return count;
}

console.log(trailingZeros(5))