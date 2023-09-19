/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] !== 0) j++
        if (nums[j] === 0 && nums[i] !== 0) {
            nums[j] = nums[i];
            nums[i] = 0;
            j++
        }

    }
};
