// Distinct Prime Factors of a given number N
// Last Updated : 04 Jan, 2023
// Given a number N, the task is to find the distinct Prime Factors of N.

// Examples:

// Input: N = 12
// Output: 2 3
// Explanation: The factors of 12 are 1, 2, 3, 4, 6, 12.
// Among these the distinct prime factors are 2 and 3.

function allPrimeFactors(N) {
    let list = []
    let prime = 0

    for (let i = 2; i * i <= N; i++) {
        while (N % i === 0) {
            if (i !== prime) {
                list.push(i)
            }
            prime = i
            N = N / i
        }
    }
    if (N > 1) {
        list.push(N)
    } return list
}

console.log(allPrimeFactors(100))