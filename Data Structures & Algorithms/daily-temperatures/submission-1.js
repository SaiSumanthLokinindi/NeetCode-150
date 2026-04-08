class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const stack = [];
        const res= new Array(temperatures.length).fill(0);

        for(let i=0;i<temperatures.length;i++){
            if(stack.length === 0){
                stack.push(i);
                continue;
            }

            while(stack.length !==0 && temperatures[stack[stack.length-1]] < temperatures[i]){
                const temp = stack.pop();
                res[temp] = i-temp;
            }
            stack.push(i);
        }
        return res;
    }
}
