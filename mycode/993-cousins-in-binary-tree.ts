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

 interface TreeNodeExt {
    depth: number
    parent: TreeNode | null
}

type TreeNode_D = TreeNode & TreeNodeExt

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    (root as TreeNode_D).depth = 0
    ;(root as TreeNode_D).parent = null
    const getTreeNode = (n: number): TreeNode_D | null => {
        const queue: TreeNode_D[] = [root as TreeNode_D]
        let depth = 0
        while (queue.length > 0) {
            const node = queue.shift() as TreeNode_D
            depth = node.depth
            if (node.val === n) return node
            if (node.left) {
                const left = node.left as TreeNode_D
                left.depth = depth + 1
                left.parent = node
                queue.push(left)
            }
            if (node.right) {
                const right = node.right as TreeNode_D
                right.depth = depth + 1
                right.parent = node
                queue.push(right)
            }
        }
        return null
    }
    const nodeX = getTreeNode(x)
    const nodeY = getTreeNode(y)
    return nodeX?.depth === nodeY?.depth && nodeX?.parent !== nodeY?.parent
};
