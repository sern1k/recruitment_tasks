/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    for (let letter = 0; letter < strs[0].length; letter++) {
        for (let word = 1; word < strs.length; word++) {
            if (strs[0][letter] !== strs[word][letter]) {
                return strs[0].slice(0,letter);
            }
        }
    }
    return strs[0];
};
