/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = [];
    output.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] + nums[i]
    }
    return output;
};
