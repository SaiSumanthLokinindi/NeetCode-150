class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0, right = matrix.length-1;

        while(left < right){
            const mid = left + Math.floor((right-left)/2);
            const base = matrix[mid][0];
            console.log(base);
            if(base === target) return true;
            else if( target < base){
                right = mid -1;
            }
            else if(target <= matrix[mid][matrix[mid].length-1]){
                right = mid;
            }
            else{
                left = mid+1;
            }
        }

        const row = left;

        left = 0, right = matrix[row].length-1;

        while(left <= right){
            const mid = left + Math.floor((right-left)/2);
            const base = matrix[row][mid];
            if(base === target) return true;
            else if( target > base){
                left = mid+1;
            }
            else right = mid - 1;
        }

        return false;
    }
}
