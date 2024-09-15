let trailingZeros = (n) => {
    let count = 0
    while (n !== 0) {
        n = Math.floor(n / 5)
        count = count + n
    }
    return count;
}

console.log(trailingZeros(5))