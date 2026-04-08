class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const carsArr = new Array(target + 1).fill(undefined);

    for(let i=0;i<position.length;i++){
        carsArr[position[i]] = (target-position[i])/speed[i];
    }


        const stack = [];
        for(let i=target;i>=0;i--){
            if(!carsArr[i]) continue;
            stack.push(carsArr[i]);

            if(stack.length>=2 && stack[stack.length-1] <= stack[stack.length-2]){
                stack.pop();
            }
        }

        return stack.length;
    }
}
