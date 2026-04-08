class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let palindromeString = '';
        s = s.toLowerCase();
        for(let ch of s){
            if((ch >='a' && ch<='z') || (ch>='A' && ch<='Z') || (ch>='0' && ch<='9')){
                palindromeString += ch;
            }
        }

        for(let i=0, j=palindromeString.length-1; i<j;i++,j--){
            if(palindromeString[i]!==palindromeString[j]) return false;
        }

        return true;

    }
}
