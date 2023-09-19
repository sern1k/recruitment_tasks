/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = 0;
    for (let i = 1; i <= nums.length; i++) {
        sum += i - nums[i - 1];
    }

    return sum;
};
