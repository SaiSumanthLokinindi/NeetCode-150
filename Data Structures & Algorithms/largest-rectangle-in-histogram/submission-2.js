class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let max = 0;


        for(let i=0;i<=heights.length;i++){
            const currHeight = i === heights.length ? 0 : heights[i];

            while(stack.length !== 0 && heights[stack[stack.length-1]] > currHeight){
                const topIdx = stack.pop();

                const width = stack.length === 0 ? i : (((i-1) - (stack[stack.length-1] + 1) + 1));
                const area = heights[topIdx] * width;
                max = Math.max(max, area);
            }
            stack.push(i);
        }
        return max;
    }
}
