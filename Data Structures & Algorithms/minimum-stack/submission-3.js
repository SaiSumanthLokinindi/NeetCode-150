class MinStack { 
    constructor() {
        this.point = -1;
        this.min = Number.POSITIVE_INFINITY;
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.point === -1) {
            this.stack[++this.point] = val;
            this.min  = val;
            return;
        }
        if(val < this.min){
            this.stack[++this.point] = 2*val - this.min;
            this.min = val;
        }
        else{
            this.stack[++this.point] = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let temp;
        if(this.stack[this.point] < this.min){
            temp = this.min;
            this.min = 2*this.min - this.stack[this.point];
            this.point--;

        }
        else{
            temp = this.stack[this.point--];
        }
        if(this.point === -1) this.min = Number.POSITIVE_INFINITY;
        return temp;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack[this.point] < this.min) {
            return this.min;
        }
        return this.stack[this.point];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
