class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let left = 0, right = 0, minLength = Number.POSITIVE_INFINITY, startIndex = -1, matches = 0;
        const hash = new Map();

        for(const ch of t){
            hash.set(ch, (hash.get(ch) || 0) + 1);
        }

        while(right < s.length){
            hash.set(s[right], (hash.get(s[right]) || 0) -1);
            if(hash.get(s[right])>=0){
                matches++;
            }
            console.log(hash, matches)
            while(matches === t.length){
                hash.set(s[left], hash.get(s[left]) + 1);
                console.log("hello",hash);

                if(hash.get(s[left]) > 0){
                    matches--;
                }
                if(right - left + 1 < minLength){
                    minLength = right - left + 1;
                    startIndex = left;
                }
                left++;
            }

            right++;
        }

        if(startIndex === -1) return "";
        else return s.substr(startIndex, minLength);
    }
}
