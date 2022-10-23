/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let output = [...nums];
    for (let i = 1; i < nums.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            output[i] += nums[j]
        }
    }
    return output;
};
