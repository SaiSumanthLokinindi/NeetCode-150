class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums = nums.sort((a,b)=>a-b);
        let k=0;
        const res = [];
        while(k< nums.length-2){
            if(k!==0 && nums[k] === nums[k-1]){ k++; continue;}
            let i=k+1, j=nums.length-1;

            while(i<j){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    res.push([nums[i], nums[j], nums[k]]);
                    i++;
                    while(nums[i] === nums[i-1] && i<j) i++;
                    j--;
                    while(nums[j] === nums[j+1] && j>i) j--;
                }
                else if(sum < 0){
                    i++;
                    while(nums[i] === nums[i-1] && i<j) i++;
                }
                else {
                    j--
                    while(nums[j] === nums[j+1] && j>i) j--;
                }
            }
            k++;
        }
        return res;
    }
}
