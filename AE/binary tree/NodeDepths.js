/*
 * Node Depths
 *
 * The distance between a node in a Binary Tree and the tree's root is called the node's depth.
 *
 * Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
 *
 * eg:
 *   Input:
 *     tree =         1
 *                 /     \
 *                2       3
 *               / \     / \
 *              4   5   6   7
 *             / \
 *            8   9
 *   Output:
 *     16    // 0 + 1 * 2 + 2 * 4 + 3 * 2 = 16
 */

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


/***
 *
 * A solution similar to the lever-order binary tree traversal
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param root
 * @returns {number}
 */
function nodeDepths(root) {
    let depths = 0
    const stack = [{node: root, depth: 0}]
    while(stack.length > 0) {
        const {node, depth} = stack.pop()
        depths += depth
        if(node.left) stack.push({node: node.left, depth: depth + 1})
        if(node.right) stack.push({node: node.right, depth: depth + 1})
    }
    return depths
}
