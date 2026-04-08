class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let leftMax = 0, rightMax = 0, i=0, j=height.length-1;
        let res=0;
        while(i<=j){
            if(leftMax<=rightMax){
                if(height[i]<=leftMax){
                    res+=leftMax-height[i];
                }else{
                    leftMax = height[i]
                }
                i++;
            }
            else{
                if(height[j]<=rightMax){
                    res+= rightMax-height[j];
                }
                else{
                    rightMax = height[j]
                }
                j--;
            }
        }
        return res;
    }
}
