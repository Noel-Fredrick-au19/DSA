/**
40. Combination Sum II
Medium
Topics
Companies
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations 
in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 */

function combinationSum2(candidates, target) {
    let result = [];
    candidates.sort()
    let used = new Array(candidates.length).fill(false)
    const backtrack = (currentCombination, remainingTarget, start) => {
        if (remainingTarget === 0) {
            result.push([...currentCombination])
            return
        }
        if (remainingTarget < 0) return;

        for (let i = start; i < candidates.length; i++) {
            if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) continue;
            if (!used[i]) {
                used[i] = true
                currentCombination.push(candidates[i])
                backtrack(currentCombination, remainingTarget - candidates[i], i);
                currentCombination.pop() 
                used[i] = false
            }
        }

    }
    backtrack([], target, 0)
    return result
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));