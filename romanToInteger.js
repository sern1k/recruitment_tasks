/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    hashTable = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    result = 0;
    for (let i = 0; i< s.length; i++) {
        let currentChar = hashTable[s[i]];
        let nextChar = hashTable[s[i + 1]];

        if (currentChar < nextChar) {
            result += nextChar - currentChar;
            i++;
        } else {
            result += currentChar;
        }
    }

    return result;
};
