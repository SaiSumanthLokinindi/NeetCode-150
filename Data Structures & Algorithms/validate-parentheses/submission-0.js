class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for(let ch of s){
            if(ch === '(' || ch === '{' || ch === '['){
                stack.push(ch);
            }
            else if(ch === ')' && stack[stack.length-1] === '('){
                stack.pop();
            }
            else if(ch === '}' && stack[stack.length-1] === '{'){
                stack.pop();
            }
            else if(ch === ']' && stack[stack.length-1] === '['){
                stack.pop();
            }
            else stack.push(ch);
        }

        return stack.length === 0;
    }
}
