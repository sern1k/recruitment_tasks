/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init;

    let result = [];
    let accum = init;
    for (let i = 0; i < nums.length; i++) {
        result.push(fn(accum, nums[i]));
        accum = fn(accum, nums[i]);
    }
    return result[result.length - 1];
};
