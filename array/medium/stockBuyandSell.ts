function stockBuyandSell(prices: Array<number>) {
  let maxProfit = -Infinity;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}
console.log(stockBuyandSell([7, 1, 5, 3, 6, 4]));
