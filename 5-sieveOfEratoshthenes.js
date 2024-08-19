
// Sieve of Eratosthenes
// Difficulty: EasyAccuracy: 47.43%Submissions: 57K+Points: 2
// Given a number N, calculate the prime numbers up to N using Sieve of Eratosthenes.  

// Example 1:

// Input:
// N = 10

// Output:
// 2 3 5 7

// Explanation:
// Prime numbers less than equal to N 
// are 2 3 5 and 7.
// Example 2:

// Input:
// N = 35

// Output:
// 2 3 5 7 11 13 17 19 23 29 31

// Explanation:
// Prime numbers less than equal to 35 are
// 2 3 5 7 11 13 17 19 23 29 and 31.

function sieveOfEratosthenes(N) {
    let isPrimes = Array(N + 1).fill(true)
    const primes = []

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (isPrimes[i]) {
            for (let j = i * i; j <= N; j += i) {
                isPrimes[j] = false
            }
        }
    }

    for (let i = 2; i <= N; i++) {
        if (isPrimes[i]) {
            primes.push(i)
        }
    } return primes
}


console.log(sieveOfEratosthenes(100))

// The time complexity of the optimal approach is

// Time Complexity: Object(N log (log N))  which is very efficient for finding primes up to a large number.
// space Complexity: O(1) since it does not require any additional space apart from the input parameters and variables used for computation.