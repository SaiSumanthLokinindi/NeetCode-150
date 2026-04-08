class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let totalHours = Number.POSITIVE_INFINITY, k = 0;

        while(totalHours > h){
            let currHours = 0;
            k++;
            for(let i=0;i<piles.length;i++){
                currHours += Math.ceil(piles[i]/k);
            }
            totalHours = currHours;
        }

        return k;
    }
}
