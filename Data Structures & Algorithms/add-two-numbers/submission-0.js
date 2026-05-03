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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let curr1 = l1, curr2 = l2, carry = 0;
        let head = null, tail = null;

        while(curr1 && curr2){
            let sum = curr1.val + curr2.val + carry;
            let newNode = null;
            if(sum >= 10){
                carry = Math.floor(sum / 10);
                newNode = new ListNode(sum%10, null);
            }
            else{
                newNode = new ListNode(sum);
                carry = 0;
            }
            if(!head){
                    head = newNode;
                    tail = newNode;
                }
                else{
                    tail.next = newNode;
                    tail = newNode;
                }
            curr1 = curr1.next;
            curr2 = curr2.next;
        }

        while(curr1){
            let sum = curr1.val + carry;
            carry = Math.floor(sum/10);
            const newNode = new ListNode(sum %10, null);
            if(!head){
        head = newNode;
        tail = newNode;
    } else {
        tail.next = newNode;
        tail = newNode;
    }
            curr1 = curr1.next;
        }

        while(curr2){
            let sum = curr2.val + carry;
            carry = Math.floor(sum/10);
            const newNode = new ListNode(sum %10, null);

            if(!head){
        head = newNode;
        tail = newNode;
    } else {
        tail.next = newNode;
        tail = newNode;
    }

            curr2 = curr2.next;
        }

        if(carry){
            const newNode = new ListNode(carry);
            tail.next = newNode;
            tail = newNode;
        }

        return head;
    }
}
