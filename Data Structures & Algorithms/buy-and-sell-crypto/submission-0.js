class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currLeastPrice = prices[0];

        let maxProfit = 0;

        for(let i=1;i<prices.length;i++){
            if(prices[i]<currLeastPrice){
                currLeastPrice = prices[i];
            }
            else{
                maxProfit = Math.max(maxProfit, prices[i]-currLeastPrice);
            }
        }

        return maxProfit;
    }
}
