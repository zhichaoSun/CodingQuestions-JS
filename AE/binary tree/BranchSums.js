/*
 * Branch Sums
 *
 * Write a function that takes in a Binary Tree
 * and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
 *
 * A branch sum is the sum of all values in a Binary Tree branch.
 * A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
 *
 * eg:
 *   Input:
 *     tree =       1
 *               /     \
 *              2       3
 *            /   \   /   \
 *           4     5 6     7
 *          / \   /
 *         8   9 10
 *   Output:
 *     [15, 16, 18, 10, 11]
 *       15 == 1 + 2 + 4 + 8
 *       16 == 1 + 2 + 4 + 9
 *       18 == 1 + 2 + 5 + 10
 *       10 == 1 + 3 + 6
 *       11 == 1 + 3 + 7
 */


class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


/***
 * O(N) time complexity
 * O(N) aux space
 *
 * @param root
 * @returns {[]}
 */
function branchSums(root) {
    const sums = []
    branchSumsHelper(root, 0, sums)
    return sums
}

function branchSumsHelper(node, runningSum, sums) {
    if(!node) return

    const newRunningSum = runningSum + node.value

    if(!node.left && !node.right) return sums.push(newRunningSum)
    else {
        branchSumsHelper(node.left, newRunningSum, sums)
        branchSumsHelper(node.right, newRunningSum, sums)
    }

}
