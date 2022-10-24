/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let newS;
    for (let i = 0; i < s.length - 1; i++) {
        newS = s.replace(s[i], t[i]);
    }
};
