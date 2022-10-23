/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if (nums[0] === target || target < Math.min(...nums)) {
       return 0;
    }
    if (target > Math.max(...nums)) {
        return nums.length;
    }
   for (let i = 0; i <= nums.length; i++) {
       if (nums[i+1] === target || nums[i+1] > target) {
           return i+1;
       }
   }
};
