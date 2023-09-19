/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, left, right, target){
    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > target)
            return binarySearch(arr, left, mid - 1, target);

        return binarySearch(arr, mid + 1, right, target);
    }

    return left;
}

var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);
    if (index >= 0) return index;

    if (target <= nums[0]) return 0;
    if (target >= nums[nums.length - 1]) return nums.length;

    return binarySearch(nums, 0, nums.length - 1, target);
};
