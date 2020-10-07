/**
 * @param {number[]} nums
 * @return {number}
 * @description
 *    Given an array of integers nums. A pair (i,j) is called good if nums[i] == nums[j] and i < j. Return the number of good pairs.
 *    Input: nums = [1,2,3,1,1,3]
 *    Output: 4
 *    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 */
var numIdenticalPairs = function(nums) {
    let map = new Map();
    let counter = 0;

    for(let num of nums) {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    }

    for(let [key, value] of map.entries()) {
        counter += (value - 1) * value / 2;
    }

    return counter;
};

console.log(numIdenticalPairs([1,2,3,1,1,3], 4));
