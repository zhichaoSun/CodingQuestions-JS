/*
 * BST Traversal
 *
 * For a tree:
 *       curr
 *      /    \
 *    left  right
 * in/pre/post-order traversal will be:
 *   in-order:      left, curr, right,
 *   pre-order:     curr, left, right,
 *   post-order:    left, right, curr,
 * respectively.
 *
 * In-order traversal returns values in order.
 *
 * Preorder traversal can be used to get prefix expression on of an expression tree.
 *
 * Post-order traversal while deleting or freeing nodes and values can delete or free an entire binary tree.
 * Thereby the node is freed after freeing its children.
 *
 */


/***
 *
 * In-order traversal, recursively
 *
 * O()
 * O()
 *
 * @param root
 * @param array
 * @returns {[]}
 *
 */
function inOrderTraverseR(root, array) {
    if(root !== null) {
        inOrderTraverseR(root.left, array)
        array.push(root.value)
        inOrderTraverseR(root.right, array)
    }
    return array
}


/***
 *
 * Pre-order Traversal, recursively
 *
 * @param root
 * @param array
 * @returns {[]}
 *
 */
function preOrderTraverseR(root, array) {
    if(root !== null) {
        array.push(root.value)
        preOrderTraverseR(root.left, array)
        preOrderTraverseR(root.right, array)
    }
    return array
}


/***
 *
 * Post-order Traversal, recursively
 *
 * @param root
 * @param array
 * @returns {[]}
 *
 */
function postOrderTraverseR(root, array) {
    if(root !== null) {
        postOrderTraverseR(root.left, array)
        postOrderTraverseR(root.right, array)
        array.push(root.value)
    }
    return array
}


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

let root = new Node(10)
root.left = new Node(5)
root.right = new Node(15)
root.left.left = new Node(2)
root.left.right = new Node(6)
root.left.left.left = new Node(1)
root.right.right = new Node(22)

/*
            10
           /  \
          5    15
         / \    \
        2   6    22
       /
      1
 */

console.log(inOrderTraverseR(root, []))     // [1, 2, 5, 6, 10, 15, 22]
console.log(preOrderTraverseR(root, []))    // [10, 5, 2, 1, 6, 15, 22]
console.log(postOrderTraverseR(root, []))   // [1, 2, 6, 5, 22, 15, 10]
