/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        if(!head) return head;

        while(curr.next){
            let temp = curr.next;
            curr.next = temp.next;
            temp.next = head;
            head = temp;
        }

        return head;
    }
}
