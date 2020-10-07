/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * @description
 *      Input: nums = [1,2,3,4,4,3,2,1], n = 4
 *      Output: [1,4,2,3,3,2,4,1]
 */
var shuffle = function(nums, n) {
    let result = [];

    for(let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i+n]);
    }

    return result;
};

console.log(shuffle([1,2,3,4,4,3,2,1], 4));
