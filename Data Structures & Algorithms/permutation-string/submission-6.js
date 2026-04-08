class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s2.length < s1.length) return false;

        const baseHash = new Map();
        const n = s1.length;

        for(const ch of s1){
            baseHash.set(ch, (baseHash.get(ch) || 0) + 1);
        }

        const windowHash = new Map();
        let matches = 0;

        for(let i=0;i<s1.length;i++){
            windowHash.set(s2[i], (windowHash.get(s2[i]) || 0) +1);
        }

        Array.from(baseHash.entries()).forEach(([ch, freq])=>{
            if(windowHash.has(ch) && windowHash.get(ch) === freq) matches++;
        })

        console.log(baseHash);

        if(matches === baseHash.size) return true

        console.log("windowHash1", windowHash, matches);

        for(let i=s1.length;i<s2.length;i++){
            let previouslyMatched = baseHash.get(s2[i-n]) === windowHash.get(s2[i-n]);
            windowHash.set(s2[i-n], windowHash.get(s2[i-n])-1);
            if(baseHash.has(s2[i-n])){
                if(baseHash.get(s2[i-n]) !== windowHash.get(s2[i-n])){
                    if(previouslyMatched)matches--;
                }
                else{
                    matches++;
                }
            }
            console.log("windowHash2", windowHash, matches);
            previouslyMatched = baseHash.get(s2[i]) === windowHash.get(s2[i]);
            windowHash.set(s2[i], (windowHash.get(s2[i]) || 0) + 1);
            if(baseHash.has(s2[i])){
                if(baseHash.get(s2[i]) !== windowHash.get(s2[i])){
                    if(previouslyMatched) matches--;
                }
                else{
                    matches++;
                }
            }
            console.log("windowHash", windowHash, matches);

            if(matches === baseHash.size) return true;
        }

        return false;
    }
}
