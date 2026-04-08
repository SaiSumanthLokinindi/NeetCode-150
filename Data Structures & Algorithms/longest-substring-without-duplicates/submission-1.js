class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        const hash = new Map();

        let i=0, maxLength = 0;

        for(let j=0;j<s.length;j++){
            const lastIndex = hash.get(s[j]);
            if(lastIndex!=undefined && lastIndex >= i){
                i=lastIndex+1;
            }
            hash.set(s[j], j);
            maxLength = Math.max(maxLength, j-i+1);
        }
        return maxLength;
    }
}
