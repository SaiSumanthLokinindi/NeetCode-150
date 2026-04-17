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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let curr1 = list1, curr2 = list2;
        let newHead = null, newTail = null;
        if(!curr1) return curr2;
        else if(!curr2) return curr1;

        while(curr1 && curr2){
            let newNode = null;
            if(curr1.val < curr2.val){
                newNode = curr1;
                curr1 = curr1.next;
            }
            else{
                newNode = curr2;
                curr2 = curr2.next;
            }
            if(!newHead){
                newHead = newNode;
                newTail = newNode
            }else{
                newTail.next = newNode;
                newTail = newNode;
            }
        }

        while(curr1){
            newTail.next = curr1;
            newTail = curr1;
            curr1 = curr1.next;
        }

        while(curr2){
            newTail.next = curr2;
            newTail = curr2;
            curr2 = curr2.next;
        }
        return newHead;
    }
}
