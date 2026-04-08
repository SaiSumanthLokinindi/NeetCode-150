class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(let token of tokens){
            if(token === '+' || token === '-' || token === '*' || token === '/'){
                const operand2 = Number(stack.pop());
                const operand1 = Number(stack.pop());
                let res;
                switch(token){
                    case '+': res = operand1 + operand2;
                    break;
                    case '-': res = operand1 - operand2;
                    break;
                    case '*': res = operand1 * operand2;
                    break;
                    default : res = Math.trunc(operand1/operand2);
                }
                stack.push(res);
                console.log("token stack", token, stack)
            }
            else{
                stack.push(token);
            }
        }
        return stack.pop();
    }
}
