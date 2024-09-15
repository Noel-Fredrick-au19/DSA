// Helper function to calculate the GCD of two numbers
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Function to calculate GCD of an array
function gcdOfArray(arr) {
    let result = arr[0];  // Start with the first element as the initial GCD
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);  // Calculate GCD with the next element
    }
    return result;
}

// Example usage
let arr = [8, 16, 12, 10];
console.log(gcdOfArray(arr));  // Output: 2
