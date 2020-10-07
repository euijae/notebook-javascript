/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let accumulator = 0;

    nums.map((num, index) => {
        nums[index] += accumulator;
        accumulator += num;
    });

    return nums;
};

console.log(runningSum([1,2,3,4]))
