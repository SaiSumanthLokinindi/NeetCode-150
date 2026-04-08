class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p,i)=> [p, speed[i]]).sort((a,b)=> b[0]-a[0]);

        const stack = [];
        for(let i=0;i<cars.length;i++){
            const time = (target - cars[i][0])/cars[i][1];

            stack.push(time);

            if(stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]){
                stack.pop();
            }
        }

        return stack.length;
    }
}
