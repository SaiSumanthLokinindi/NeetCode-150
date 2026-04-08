class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let left = 1, right = Math.max(...piles);

        while(left < right){
            const mid = left + Math.floor((right - left)/2);
            let totalHours = 0;
            for(let i=0;i<piles.length;i++){
                totalHours += Math.ceil(piles[i]/mid);
            }
            if(totalHours <= h){
                right = mid
            }
            else{
                left = mid + 1
            }
        }

        return left;
    }
}
