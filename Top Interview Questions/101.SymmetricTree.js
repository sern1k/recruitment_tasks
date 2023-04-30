/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root == null) return true;

    return ifSymmetry(root.left, root.right);
};

function ifSymmetry(left, right) {
    if (left == null && right == null) return true;
    if (!left || !right || left.val !== right.val) return false;

    return ifSymmetry(left.left, right.right) && ifSymmetry(left.right, right.left);
}
