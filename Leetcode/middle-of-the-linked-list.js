/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if(!head || !head.next) return head;

    let length = 1;
    let temp = head.next
    while (temp) {
        length++;
        temp = temp.next;
    }

    temp = head.next
    for (let i = 1; i < Math.floor(length/2); i++) {
        temp = temp.next;
    }

    return temp;
};
