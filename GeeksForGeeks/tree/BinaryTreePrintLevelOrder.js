/***
 *
 * traverse the binary tree in level order
 *
 * @param rootNode
 * @returns {[]} the node.data array in level order
 *
 */
export function printLevelOrder1(rootNode) {
    let queue = []
    let ans = []
    queue.push(rootNode)
    while(queue.length) {
        let tempNode = queue.shift()
        ans.push(tempNode.data)
        if(tempNode.left !== null) queue.push(tempNode.left)
        if(tempNode.right !== null) queue.push(tempNode.right)
    }
    return ans
}


/***
 *
 * print each line at once
 *
 * @param rootNode
 *
 */
export function printLevelOrder2(rootNode) {
    let queue = []
    queue.push(rootNode)
    while(queue.length) {
        let count = queue.length
        while(count--) {
            let tempNode = queue.shift()
            console.log(tempNode.data)
            if(tempNode.left !== null) queue.push(tempNode.left)
            if(tempNode.right !== null) queue.push(tempNode.right)
        }
        console.log()
    }
}

// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }