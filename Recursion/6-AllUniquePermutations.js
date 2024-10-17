/**
Problem Description
Given an array A of size N denoting collection of numbers that might contain duplicates, return all possible unique permutations.
NOTE: No 2 entries in the permutation sequence should be the same.
Input Format
Only argument is an integer array A of size N.

Output Format
Return a 2-D array denoting all possible unique permutation of the array.

Example Input
Input 1: 
A = [1, 1, 2]
Input 2: 
A = [1, 2]

Example Output
Output 1: 
[ [1, 1, 2]
  [1, 2, 1]
  [2, 1, 1] ]
Output 2: 
[ [1, 2]
  [2, 1] ]
 */

// function permuteUnique(nums) {
//     const result = []
//     const set = new Set();
//     generatePermutation(nums, [], set, result)
//     return result;
// };

// function generatePermutation(nums, current, set, result) {
//     if (current.length === nums.length) {
//         const subset = current.slice();
//         if (!set.has(subset.join(','))) {
//             set.add(subset.join(','));
//             result.push(subset)
//         }
//         return;
//     }
//     for (const num of nums) {
//         if (!current.includes(num)) {
//             current.push(num);
//             generatePermutation(nums, current, set, result)
//             current.pop();
//         }
//     }
// }

// console.log('permuation', permuteUnique([1, 1, 2]));


function permuteUnique(nums) {
    const result = [];  // This will hold the final unique permutations.
    nums.sort();  // Sort the array to handle duplicates easily.
    const used = new Array(nums.length).fill(false);  // Keep track of which numbers are used.
    generatePermutation(nums, [], used, result);  // Start generating permutations.
    return result;
}
function generatePermutation(nums, current, used, result) {
    if (current.length === nums.length) {
        result.push([...current]); // Push a copy of the current array
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        // Skip this number if it's the same as the previous one and the previous one wasn't used.
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
            continue;  // Skip duplicates.
        }

        if (!used[i]) {  // If the number is not used, we can use it.
            used[i] = true;  // Mark the number as used.
            current.push(nums[i]);  // Add it to the current permutation.

            // Recursively build the rest of the permutation.
            generatePermutation(nums, current, used, result);

            // Backtrack: remove the last number added and mark it as unused.
            current.pop();
            used[i] = false;
        }
    }
}

// console.log('Permutations:', permuteUnique([1, 1, 2]));

function permuteUnique(nums) {
    const result = [];
    nums.sort(); // Sort to handle duplicates
    const used = new Array(nums.length).fill(false); // Initialize the "used" array
    generatePermutation(nums, [], used, result);
    return result;
}
function generatePermutation(nums, current, used, result) {
    // Base case: if the current permutation is complete
    if (current.length === nums.length) {
        const subset = current.slice(); // Make a copy of current permutation
        result.push(subset); // Add it to result
        return;
    }

    // Iterate over each number in nums array
    for (let i = 0; i < nums.length; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
            continue;
        }

        // If the current number has not been used, include it in the permutation
        if (!used[i]) {
            used[i] = true;  // Mark this number as used
            current.push(nums[i]); // Add number to current permutation

            // Recursively generate the rest of the permutation
            generatePermutation(nums, current, used, result);

            // Backtrack: remove the last added number and mark it as unused
            current.pop();
            used[i] = false;
        }
    }
}
// console.log('permuteUnique', permuteUnique([1, 1, 2]));



function uniquePermutation(nums) {
    let result = [];
    nums.sort();
    const used = new Array(nums.length).fill(false);

    const backTrack = (currentCombinations) => {
        if (currentCombinations.length === nums.length) {
            const subset = currentCombinations.slice();
            result.push(subset);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            if (!used[i]) {
                used[i] = true;
                currentCombinations.push(nums[i]);
                backTrack(currentCombinations);
                currentCombinations.pop();
                used[i] = false;
            }
        }
    };
    backTrack([]);
    return result;
}
console.log('uniquePermutation', uniquePermutation([1, 1, 2]));