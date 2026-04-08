class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let k = 0, left = 1, right = Math.max(...piles);

        while(left <= right){
            const mid = left + Math.floor((right - left)/2);
            let totalHours = 0;
            for(let i=0;i<piles.length;i++){
                totalHours += Math.ceil(piles[i]/mid);
            }
            console.log(mid, totalHours)
            if(totalHours <= h){
                k = mid;
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }

        return k;
    }
}
