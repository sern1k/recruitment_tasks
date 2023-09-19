/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let cloneNums = [...nums];
    for (let i = 0; i <= nums.length - 1; i++) {
        nums[(i + k) % nums.length] = cloneNums[i]
    }
};
