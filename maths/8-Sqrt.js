let mySqrt = (x) => {
    let start = 0
    let end = x
    let result = 0
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (mid * mid === x) {
            result = mid
            return result
        } else if (mid * mid > x) {
            end = mid - 1
        } else {
            result = mid
            start = mid + 1
        }
    }
    return result;

}

console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2