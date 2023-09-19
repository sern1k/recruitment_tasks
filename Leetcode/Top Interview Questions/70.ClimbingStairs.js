/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) { return 1 };

    let first = 1, second = 1, third = 0;

    for (let i = 2; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
};
