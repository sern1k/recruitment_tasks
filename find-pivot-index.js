/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = 0;
    let pivot = 0;
    for (let i = 1; i < nums.length; i++) {
        rightSum += nums[i]
    }
    if (leftSum === rightSum) {
        return pivot;
    } else {
        leftSum = 0;
        rightSum = 0;
    }
    pivot = Math.ceil(nums.length / 2);
    for (let i = 0; i < pivot; i++) {
        leftSum += nums[i];
    }
    for (let i = nums.length - 1; i > pivot; i--) {
        rightSum += nums[i];
    }
    while (pivot >= 0 && pivot < nums.length) {
        if (leftSum === rightSum) {
            return pivot;
        } else if (leftSum > rightSum) {
            rightSum += nums[pivot];
            pivot -= 1
            leftSum -= nums[pivot];
        } else {
            leftSum += nums[pivot];
            pivot += 1
            rightSum -= nums[pivot];
        }
    }
    return -1;
};
