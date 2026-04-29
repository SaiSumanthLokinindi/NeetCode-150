// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if(!head) return head;


        let temp = head;
        while(temp){
            const newNode = new Node(temp.val);
            newNode.next = temp.next;
            temp.next = newNode;
            temp = temp.next.next;
        }

        temp = head;
        while(temp){
            temp.next.random = temp.random ? temp.random.next : temp.random;
            temp = temp.next.next;
        }

        temp = head;
        head = head.next;
        temp.next = null;
        temp = head;

        while(temp && temp.next){
            let curr = temp.next;
            temp.next = curr.next;
            temp = curr.next;
            curr.next = null;
        }
        return head;
    }
}
