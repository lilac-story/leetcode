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

 function bstFromPreorder(preorder: number[]): TreeNode | null {
    let root = null
    for (const n of preorder) {
        if (!root) {
            root = new TreeNode(n)
            continue
        }
        let t = root
        while (true) {
            if (t.val < n) {
                if (t.right === null) {
                    t.right = new TreeNode(n)
                    break
                } else {
                    t = t.right
                }
            } else {
                if (t.left === null) {
                    t.left = new TreeNode(n)
                    break
                } else {
                    t = t.left
                }
            }
        }
    }
    return root
};
