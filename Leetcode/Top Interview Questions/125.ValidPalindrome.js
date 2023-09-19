/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 2) return true;

    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let start = 0, end = s.length - 1; start <= end; start++, end--) {
        if (s[start] !== s[end]) return false;
    }

    return true;
};
