class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let i=0, j=heights.length-1, max = Number.NEGATIVE_INFINITY;

        while(i<j){
            if(heights[i] < heights[j]){
                max = Math.max(max, (j-i)*heights[i]);
                i++;
            }
            else{
                max = Math.max(max, (j-i)*heights[j]);
                j--
            }
        }
        return max;
    }
}
