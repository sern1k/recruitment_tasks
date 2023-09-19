/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;

    while (head.val != "a") {
        head.val = "a";
        if (!head.next) return false;
        head = head.next;
    }

    return true;
};
