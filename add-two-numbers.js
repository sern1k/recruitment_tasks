/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const iteration = (number1, number2, rest = 0) => {
        if (!number1 && !number2 && !rest) return null;
        const value = (number1?.val || 0) + (number2?.val || 0) + rest;
        const nextValue = iteration(number1?.next, number2?.next, Math.floor(value / 10));
        return new ListNode(value % 10, nextValue);
    }
    return iteration(l1, l2);
};
