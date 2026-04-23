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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        if(!head) return head;

        let slow = head, fast = head, prev = head;

        for(let i=0;i<n;i++){
            fast = fast.next;
        }

        while(fast){
            fast = fast.next;
            prev = slow;
            slow = slow.next;
        }

        if(slow === head){
            head = head.next;
            slow.next = null;
            return head;
        }

        prev.next = slow.next;
        slow.next = null;
        return head;

    }
}
