/*
 * Breadth-first Search
 *
 * You're given a Node class that has a name and an array of optional children nodes.
 * When put together, nodes form an acyclic tree-like structure.
 *
 * Implement the breadthFirstSearch method on the Node class,
 * which takes in an empty array, traverses the tree using the Breadth-first Search approach
 * (specifically navigating the tree from left to right),
 * stores all of the nodes' names in the input array, and returns it.
 *
 * eg:
 *   Input:
 *     graph = A
 *           / | \
 *          B  C  D
 *         / \   / \
 *        E   F G   H
 *           / \ \
 *          I   J K
 *   Output:
 *     ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
 *
 */

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    /***
     *
     * Breadth-first Search
     *
     * O(V+E) time complexity
     * O(V) aux space
     * where V is the number of vertices and E is the number of edges
     *
     * @param array
     * @returns {*}
     *
     */
    breadthFirstSearch(array) {
        let nodeQ = [this]
        while(nodeQ.length) {
            const curr = nodeQ.shift()
            array.push(curr.name)
            nodeQ = [...nodeQ, ...curr.children]
        }
        return array
    }
}