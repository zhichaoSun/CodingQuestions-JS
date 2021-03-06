/*
 * Validate BST
 *
 * Write a function that takes in a potentially invalid Binary Search Tree (BST)
 * and returns a boolean representing whether the BST is valid.
 *
 * A BST is valid if and only if all of its nodes are valid
 *
 * eg:
 *   Input:
 *     tree =  10
 *           /    \
 *          5      15
 *         / \    /  \
 *        2   5  13  22
 *       /         \
 *      1          12
 *
 *   Output: false
 *
 */


/***
 *
 * O(N) time complexity
 * O(BST height) aux space
 *
 * @param root
 * @param parent
 * @returns {boolean}
 *
 */
function validateBst(root, parent = null) {
    return helper(root)
}

function helper(root, min = -Infinity, max = Infinity) {
    let nodeQueue = []

    if(root.value < min || root.value >= max) return false
    nodeQueue = [...nodeQueue, root.left, root.right]

    for (const node of nodeQueue) {
        if(node !== null) {
            if(node === root.left) {
                if(!helper(node, min, root.value)) return false
            } else if(node === root.right) {
                if(!helper(node, root.value, max)) return false
            }
        }
    }

    return true
}