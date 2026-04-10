class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
         if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        let m = nums1.length;
        let n = nums2.length;

        let leftSize = Math.floor((m + n + 1) / 2);

        let low = 0, high = m;

        while (low <= high) {

            let i = Math.floor(low + (high - low) / 2);
            let j = leftSize - i;

            let maxLeftA = (i === 0) ? -Infinity : nums1[i - 1];
            let minRightA = (i === m) ? Infinity : nums1[i];

            let maxLeftB = (j === 0) ? -Infinity : nums2[j - 1];
            let minRightB = (j === n) ? Infinity : nums2[j];

            if (maxLeftA <= minRightB && maxLeftB <= minRightA) {

                if ((m + n) % 2 === 0) {
                    return (Math.max(maxLeftA, maxLeftB) + 
                            Math.min(minRightA, minRightB)) / 2;
                } else {
                    return Math.max(maxLeftA, maxLeftB);
                }

            } else if (maxLeftA > minRightB) {
                high = i - 1;
            } else {
                low = i + 1;
            }
        }


    }
}
