/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { // runtime 66ms, memory 43.2MB
    return nums.reduce((prev, curr) => prev ^ curr);
};

var singleNumber = function(nums) { // runtime 56ms, memory 45.3MB
    let answer = 0;
    for (let number of nums) {
        answer ^= number;
    }
    return answer;
};
