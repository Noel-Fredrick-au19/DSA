/**
46. Permutations
Medium
Topics
Companies
Given an array nums of distinct integers, return all the possible permutations
You can return the answer in any order.
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 */

function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false); 

    const backTrack = (current) => {
        if (current.length === nums.length) {
            let subset = current.slice(); 
            result.push(subset); 
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            if (!used[i]) {
                used[i] = true; 
                current.push(nums[i]); 
                backTrack(current);
                current.pop();
                used[i] = false;
            }
        }
    }
    backTrack([]); 
    return result; 
}

console.log('Permutation', permute([1, 2, 3]));