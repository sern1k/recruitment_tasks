/**
 * @param {string[]} strs
 * @return {string}
 */

// new solution
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    return strs.reduce((previous, next) => {
        let i = 0;
        while (previous[i] && next[i] && previous[i] === next[i]) i++;
        return previous.slice(0, i);
    });
};

// old solution
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


const tab = [1, 2, 3, 4];

const result = tab.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr
});
console.log(tab)
console.log(result);
