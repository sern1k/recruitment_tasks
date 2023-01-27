/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    string = x.toString();

    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        if (string[i] !== string[j]) return false;
        i++;
        j--;
    }
    return true;
};
