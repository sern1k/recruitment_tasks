/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let powNums = nums.map((value) => {
        return Math.pow(value, 2)
    });
     return powNums.sort((a, b) => a - b);
};
