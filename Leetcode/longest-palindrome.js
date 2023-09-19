/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s.length;

    let map = new Map();
    for (letter of s) map.set(letter, (map.get(letter) || 0) + 1)

    let counter = 0;
    let odd = 0;
    for ([letter, amount] of map) {
        if (amount % 2 === 0) counter += amount;
        else {
            counter += amount;
            odd++;
        }
    }

    return odd ? counter - odd + 1 : counter;
};
