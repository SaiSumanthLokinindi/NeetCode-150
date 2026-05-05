class Node{
    constructor(key, value, prev = null, next = null){
        this.key = key;
        this.val = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();
        this.head = null;
        this.tail = null;
    }

    printLL(head){
        let temp = head;
        while(temp){
            console.log(temp.val);
            temp = temp.next;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            const node = this.map.get(key);
            if(node === this.head)return node.val;
            else if(node.prev && !node.next){
                node.prev.next = node.next;
                this.tail = node.prev;
                node.prev = null;
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }else{
                node.prev.next = node.next;
                node.next.prev = node.prev;
                node.prev = null;
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
            return node.val;
        }
        else {
            this.printLL(this.head);
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        if(this.map.has(key)){
            
            const node = this.map.get(key);
            node.val = value;
            this.get(key);
            this.printLL(this.head)
        }
        else{
            const node = new Node(key, value);
            if(!this.head){
                this.tail = node;
                this.head = node;
            }
            else{
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
            this.map.set(key, node);
            if(this.size === this.capacity){
                this.map.delete(this.tail.key);
                const temp = this.tail;
                this.tail = this.tail.prev;
                this.tail.next =null;
                temp.prev = null;
            }
            else{
                this.size++;
            }

            this.printLL(this.head)
        }
    }
}
