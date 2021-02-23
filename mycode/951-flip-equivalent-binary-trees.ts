/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return (root1 === null && root2 === null) ||
        (!!root1 && !!root2 && root1.val === root2.val && (
         (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
         (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
        ))
};
