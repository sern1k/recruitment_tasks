/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) { // runtime 67ms memory 41MB
    let answer = [];
    for (let number of nums1) {
        if (nums2.includes(number)) {
            answer.push(number);
            nums2[nums2.indexOf(number)] = '';
        }
    }
    return answer;
};

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?

var intersect = function(nums1, nums2) { // runtime 58ms memory 43.1MB
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);

    let answer = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
        else {
            answer.push(nums1[i]);
            i++;
            j++;
        }
    }

    return answer;
};
