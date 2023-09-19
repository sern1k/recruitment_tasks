/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let answer = [];

    for (let row = 0; row < numRows; row++) {
        answer[row] = [];
        answer[row][0] = 1;
        answer[row][row] = 1;

        for (let col = 1; col < row; col++) {
            answer[row][col] = answer[row - 1][col - 1] + answer[row - 1][col];
        }
    }

    return answer;
};
