class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0, right = nums.length-1;

        while(left <= right){
            const mid = left + Math.floor((right - left)/2);

            if(target < nums[mid]){
                if(target < nums[left] && nums[mid] > nums[right]){
                    left = mid + 1;
                }
                else right = mid-1;
            }
            else if ( target > nums[mid]){
                if(target > nums[right] && nums[mid] < nums[left]){
                    right = mid -1;
                }
                else left = mid + 1;
            }
            else return mid;
        }

        return -1;
    }
}
