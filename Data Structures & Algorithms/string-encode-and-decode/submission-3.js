class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        if(strs.length === 0) return '_empty_list_';

        return strs.map(str=> str.length + '#' + str).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if( str === '_empty_list_') return []
        let i=0;
        const res = [];
        while(i<str.length){
            let  j = i;
            while(str[j] !== '#') j++;
            const wordLength = parseInt(str.substring(i, j));
            i = j+1;
            res.push(str.substring(i, i+wordLength));
            i += wordLength;
        }

        return res;
    }
}
