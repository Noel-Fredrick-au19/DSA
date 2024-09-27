// https://getsdeready.com/courses/design-dsa-combined/lesson/alternating-digit-sum-2/
let alternateDigitSum = (n) => {
    let sign = 1;
    let res = 0;
    for (let char of n.toString()) {
        res += sign * parseInt(char);
        sign *= -1
    }
    return res;
}

console.log(alternateDigitSum(521)) 