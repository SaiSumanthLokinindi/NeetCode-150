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
     * @return {void}
     */

    printLL(head){
        let temp = head;
        while(temp){
            console.log(temp.val);
            temp = temp.next;
        }
    }
    reorderList(head) {

        if(!head || !head.next) return head; 

        let slow = head, fast = head, mid = null;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        mid = slow;


        let midHead = mid.next;

        let curr = midHead;

        while(curr.next){
            let temp = curr.next;
            curr.next = temp.next;
            temp.next = midHead;
            midHead = temp;
        }

        mid.next = null;

        let leftHead = head, rightHead = midHead;

        let left = leftHead, right = rightHead;

        while(right){
            leftHead = leftHead.next;
            rightHead = rightHead.next;

            left.next = right;
            right.next = leftHead;

            left = leftHead;
            right = rightHead;
        }

        return head;
        
    }
}
