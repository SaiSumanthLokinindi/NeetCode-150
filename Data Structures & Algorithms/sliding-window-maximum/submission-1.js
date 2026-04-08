class TestDq {
  constructor(size) {
    this.size = size;
    this.front = -1;
    this.rear = -1;
    this.queue = new Array(this.size);
  }

  isFull() {
    return (
      this.front === this.rear + 1 ||
      (this.front === 0 && this.rear === this.size - 1)
    );
  }

  isEmpty() {
    return this.front === -1;
  }

  isLastElement() {
    return this.front >= 0 && this.front === this.rear;
  }

  resize() {
    const newQueue = new Array(this.size * 2);

    for (let i = 0; i < this.size; i++) {
      newQueue[i] = this.queue[this.front];
      this.front = (this.front + 1) % this.size;
    }

    this.queue = newQueue;
    this.front = 0;
    this.rear = this.size - 1;
    this.size = this.size * 2;
  }

  enqueueFront(value) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.front = (this.front - 1 + this.size) % this.size;
    }
    this.queue[this.front] = value;
  }

  enqueueRear(value) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }
    this.queue[this.rear] = value;
  }

  dequeueFront() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    const temp = this.queue[this.front];
    this.queue[this.front] = undefined;
    if (this.isLastElement()) this.front = this.rear = -1;
    else this.front = (this.front + 1) % this.size;
    return temp;
  }

  dequeueRear() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    const temp = this.queue[this.rear];
    this.queue[this.rear] = undefined;
    if (this.isLastElement()) this.rear = this.front = -1;
    else {
      this.rear = (this.rear - 1 + this.size) % this.size;
    }
    return temp;
  }

  printQueue() {
    console.log(this.queue);
  }

  peekFront(){
    return this.queue[this.front];
  }

  peekRear(){
    return this.queue[this.rear];
  }

  clear(){
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const dq = new TestDq(nums.length);
        const res =[];

        for(let i=0;i<nums.length;i++){
            if(dq.isEmpty()){
                dq.enqueueRear(i);
            }
            else{
                if(dq.peekFront() < i-k+1){
                    dq.dequeueFront();
                }
                    while(!dq.isEmpty() && nums[dq.peekRear()] <= nums[i]){
                        dq.dequeueRear();
                    }
                dq.enqueueRear(i);
            }
            if(i>=k-1){
                res.push(nums[dq.peekFront()])
            }
        }
        dq.clear();
        return res;
    }
}
