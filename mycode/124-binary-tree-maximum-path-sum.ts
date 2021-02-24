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

 interface MaxPathSum {
    maxPathSum?: number
}
    
type TreeNode_MPS = TreeNode & MaxPathSum

function maxPathSum(root: TreeNode | null): number {
    let maxPathSum = -Infinity
    const computeMaxPathSumWithMemory = (node: TreeNode_MPS | null) => {
        if (node === null) return
        if (node.maxPathSum !== undefined) return
        computeMaxPathSumWithMemory(node.left)
        const left = node.left as TreeNode_MPS
        computeMaxPathSumWithMemory(node.right)
        const right = node.right as TreeNode_MPS
        maxPathSum = Math.max(maxPathSum,
                              (left?.maxPathSum ?? 0) + (right?.maxPathSum ?? 0) + node.val,
                              (left?.maxPathSum ?? 0) + node.val,
                              (right?.maxPathSum ?? 0) + node.val,
                              node.val
                             )
        node.maxPathSum = Math.max((left?.maxPathSum ?? 0) + node.val,
                              (right?.maxPathSum ?? 0) + node.val,
                              node.val
                             )
    }
    computeMaxPathSumWithMemory(root)
    return maxPathSum
};
