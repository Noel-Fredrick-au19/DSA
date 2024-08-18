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