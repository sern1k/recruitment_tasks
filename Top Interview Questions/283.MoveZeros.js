/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let answer = [...nums];
    nums.fill(0);
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (answer[i] !== 0) {
            nums[j] = answer[i];
            j++;
        }
    }
};
