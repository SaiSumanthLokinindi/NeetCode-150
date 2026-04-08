class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, right = 0, maxFreq = 0, maxLength = 0;

    const hash = new Map();

    while(right < s.length){

        const freq = hash.get(s[right]);
        hash.set(s[right], freq !== undefined ? freq + 1: 1)

        maxFreq = Math.max(maxFreq, hash.get(s[right]));

        if((right-left+1) - maxFreq > k){
            hash.set(s[left], hash.get(s[left])-1)
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1 );
        right++;
    }

    return maxLength;
    }
}
