/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];

    for (price of prices) {
        min = Math.min(min, price);
        profit = Math.max(profit, price - min);
    }

    return profit;
};
