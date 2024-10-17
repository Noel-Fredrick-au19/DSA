/**
78. Subsets
Medium
Topics
Companies
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 */

function subset(nums) {
    const result = [];

    const backTrack = (currentCombinations, index) => {
        const subset = currentCombinations.slice();
        result.push(subset);

        for (let i = index; i < nums.length; i++) {
            currentCombinations.push(nums[i]);
            backTrack(currentCombinations, i + 1);
            currentCombinations.pop();
        }
    }
    backTrack([], 0)
    return result
}

// Example usage:
console.log('subset', subset([1, 2, 3]));