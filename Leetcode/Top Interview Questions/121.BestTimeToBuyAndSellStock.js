/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = 10**5;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
        minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};
