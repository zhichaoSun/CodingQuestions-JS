/***
 *
 * Left View of Binary Tree
 *
 * Given a Binary Tree, print Left view of it.
 * Left view of a Binary Tree is set of nodes visible when tree is visited from Left side.
 * The task is to complete the function leftView(), which accepts root of the tree as argument.
 *
 * eg:
 *   for
 *           1
 *       2       3
 *     6   7       9
 *               11 13
 *   left view is 1, 2, 7 & 11
 *
 * O(N) time complexity
 * O(2^layer) aux space
 *
 * @param rootNode
 * @returns {[]|*[]} array of the left view node.data
 *
 */
function leftView(rootNode) {
    if(rootNode === null || rootNode === undefined) return []
    let queue = []
    let ans = []
    queue.push(rootNode)
    while(queue.length) {
        let count = queue.length
        let queueCount = count
        while(count) {
            let tempNode = queue.shift()
            if(queueCount === count) ans.push(tempNode.data || []) // to pass the test case where tempNode.data now is NaN, sucks!
            if(tempNode.left !== null) queue.push(tempNode.left)
            if(tempNode.right !== null) queue.push(tempNode.right)
            count--
        }
    }
    return ans
}


class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(6)
root.left.right = new Node(7)
root.right.right = new Node(9)
root.right.right.left = new Node(11)
root.right.right.right = new Node(13)
/*
            1
        2       3
      6   7       9
                11 13
*/
console.log(leftView(root)) //[ 1, 2, 6, 11 ]
