// Product of factors of number
// Given a number N. Calculate the product of all factors of N. Since Answer can be very large,compute the answer modulo 109+7.

// https://getsdeready.com/courses/design-dsa-combined/lesson/product-of-factors-of-number/


// Example 1:

// Input:
// N=6
// Output:
// 36
// Explanation:
// Factors of 6 are 1,2,3,6.Their product is
// (1*2*3*6)%(109+7)=36.

// Naive Appraoch

function productOfNaiveApproach(N) {
    let product = 1;
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            product = (product * i) * (Math.pow(10, 9) + 7)
        }
    } return product
}

console.log('Naive Approach', productOfNaiveApproach(6))

// function productofFactors(N) {
//     let product = 1;
//     const mod = 1000000007;
//     for (let i = 1; i * i <= N; i++) {
//         if (N % i === 0) {
//             if (N / i === i) {
//                 product = (product * i) % mod
//             } else {
//                 product = (product * i * (N / i)) % mod
//             }
//         } return product
//     }
// }

// console.log('using optimal Approach', productofFactors(6))


function productOfFactors(N) {
    const MOD = 1000000007;
    let product = 1;

    // Loop to find all factors
    for (let i = 1; i * i <= N; i++) {
        if (N % i === 0) {
            let factor1 = i;
            let factor2 = N / i;

            // Multiply factor1
            product = (product * factor1) % MOD;

            // If factor1 is not the same as factor2, multiply factor2
            if (factor1 !== factor2) {
                product = (product * factor2) % MOD;
            }
        }
    }

    return product;
}

// Example usage
let N = 6;

// console.log(productOfFactors(N)); // Output: 36


let factors = function (N) {
    let product = 1
    for (i = 1; i * i < N; i++) {
        if (N % i === 0) {
            let factor1 = i;
            let factor2 = N / i;

            product = (product * factor1) % 100
            if (factor2 !== i) {
                product = (product * factor2) % 100
            }
        }
    }
    return product
}

console.log('factorss', factors(6));



// Complexity:
// Time Complexity: 𝑂(sqrt 𝑁) dut to the loop running up to sqrtN
// space compleixty Object(1) as no additional space is used


