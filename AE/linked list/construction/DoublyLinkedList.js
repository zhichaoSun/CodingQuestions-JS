/*
 * Doubly Linked List
 *
 * Write a doubly linked list class that has a head and a tail, both of which point to either a linked list Node or null.
 * The class should support:
 *   - Setting the head and tail of the linked list
 *   - Inserting nodes before and after other nodes as well as at given position (the position of the head node is 1)
 *   - Removing given nodes and removing nodes with given values
 *   - Searching for nodes with given values
 *
 * The input nodes can be either stand-alone nodes or nodes that are already in the linked list.
 * If they're nodes that are already in the linked list,
 * the methods will effectively be MOVING the nodes within the linked list.
 * You won't be told if the input nodes are already in the linked list,
 * so your code will have to defensively handle this scenario.
 *
 * eg:
 *   Assume the following linked list has already been created:
 *     1 <-> 2 <-> 3 <-> 4 <-> 5
 *   Assume that we also have the following stand-alone nodes:
 *     3, 3, 6
 *
 *     the doubly linked list:       1 <-> 2 <-> 3 <-> 4 <-> 5
 *   - setHead(4):                   4 <-> 1 <-> 2 <-> 3 <-> 5
 *   - setTail(6):                   4 <-> 1 <-> 2 <-> 3 <-> 5 <-> 6
 *   - insertBefore(6, 3):           4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6
 *   - insertAfter(6, 3):            4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3
 *   - insertAtPosition(1, 3): 3 <-> 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3
 *   - removeNodesWithValue(3):      4 <-> 1 <-> 2 <-> 5 <-> 6
 *   - remove(2):                    4 <-> 1 <-> 5 <-> 6
 *   - containsNodeWithValue(5): true
 *
 */

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    /***
     * Append a node at the end
     * O(1) time | * O(1) space
     * @param node
     */
    push(node) {
        if(!this.tail) {
            this.tail = node
            this.head = node
        }
        else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
    }


    /***
     * Remove current tail if exists
     * O(1) time | * O(1) space
     */
    pop() {
        if(!this.length) return

        const newTail = this.tail.prev
        if(newTail) {
            newTail.next = null
            this.tail.prev = null
        } else {
            this.head = null
        }

        this.tail = newTail
        this.length--
    }


    /***
     * Add a node at the beginning
     * O(1) time | * O(1) space
     * @param node
     */
    unshift(node) {
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length++
    }


    /***
     * Remove current head if exists
     * O(1) time | * O(1) space
     */
    shift() {
        if(!this.length) return

        const newHead = this.head.next
        if(newHead) {
            newHead.prev = null
            this.head.next = null
        } else {
            this.tail = null
        }

        this.head = newHead
        this.length--
    }


    /***
     * Print the linked list from head to tail
     * O(N) time | * O(N) space
     */
    printHeadToTail() {
        if(!this.length) return

        let curr = this.head, str = ""
        while(curr) {
            str += (curr.value + (curr.next && " <-> "))
            curr = curr.next
        }
        console.log(str)
    }


    /***
     * Print the linked list from tail to head
     * O(N) time | * O(N) space
     */
    printTailToHead() {
        if(!this.length) return

        let curr = this.tail, str = ""
        while(curr) {
            str += (curr.value + (curr.prev && " <-> "))
            curr = curr.prev
        }
        console.log(str)
    }


    /***
     * Set a node as the new head
     * O(N) time | * O(1) space
     * TODO no need to be O(N) time
     * @param node
     */
    setHead(node) {
        if(!node) return

        // check if the node is in this list already
        if(this.containsNode(node)) {
            this.remove(node)
        }

        this.unshift(node)
    }


    /***
     * Set a node as the new tail
     * O(N) time | * O(1) space
     * TODO no need to be O(N) time
     * @param node
     */
    setTail(node) {
        if(!node) return

        // check if the node is in this list already
        if(this.containsNode(node)) {
            this.remove(node)
        }

        this.push(node)
    }


    /***
     * Insert a node before a specific node
     * O(N) time | * O(1) space
     * TODO no need to be O(N) time
     * @param node
     * @param nodeToInsert
     */
    insertBefore(node, nodeToInsert) {
        if(!node || !nodeToInsert) return

        if(this.containsNode(nodeToInsert)) {
            this.remove(nodeToInsert)
        }

        let curr = this.head
        while(curr) {
            if(curr === node) {
                if(curr === this.head) {
                    this.unshift(nodeToInsert)
                    return
                }

                let prev = curr.prev
                prev.next = nodeToInsert
                nodeToInsert.prev = prev
                curr.prev = nodeToInsert
                nodeToInsert.next = curr
                this.length++
                return
            }
            curr = curr.next
        }
    }


    /***
     * Insert a node after a specific node
     * O(N) time | * O(1) space
     * TODO no need to be O(N) time
     * @param node
     * @param nodeToInsert
     */
    insertAfter(node, nodeToInsert) {
        if(!node || !nodeToInsert) return

        if(this.containsNode(nodeToInsert)) {
            this.remove(nodeToInsert)
        }

        let curr = this.tail
        while(curr) {
            if(curr === node) {
                if(curr === this.tail) {
                    this.push(nodeToInsert)
                    return
                }

                let next = curr.next
                next.prev = nodeToInsert
                nodeToInsert.next = next
                curr.next = nodeToInsert
                nodeToInsert.prev = curr
                this.length++
                return
            }
            curr = curr.prev
        }
    }


    /***
     * Insert a node at the given position
     * O(p) time, where p is the position | * O(1) space
     * @param position
     * @param nodeToInsert
     */
    insertAtPosition(position, nodeToInsert) {
        if(position > this.length + 1 || !position || !nodeToInsert)
            return

        if(position === 1) {
            this.setHead(nodeToInsert)
            return
        }

        let curr = this.head, currPost = 1
        while(curr && currPost++ < position)
            curr = curr.next

        if(curr) this.insertBefore(curr, nodeToInsert)
        else this.setTail(nodeToInsert)

    }


    /***
     * Remove all the nodes whose value === given value
     * O(N) time | * O(1) space
     * @param value
     */
    removeNodesWithValue(value) {
        if(!this.head || value === undefined) return

        let curr = this.head, next
        while(curr) {
            next = curr.next
            if(curr.value === value) {
                this.remove(curr)
            }
            curr = next
        }
    }


    /***
     * Remove a specific node if exists
     * O(N) time | * O(1) space
     * @param node
     */
    remove(node) {
        if(!this.head || !node) return

        let curr = this.head
        while(curr) {
            if(curr === node) {
                if(curr === this.head ) {
                    this.shift()
                    return
                } else if (curr === this.tail) {
                    this.pop()
                    return
                }
                curr.prev.next = curr.next
                curr.next.prev = curr.prev
                curr.prev = null
                curr.next = null
                this.length--
                return
            }
            curr = curr.next
        }
    }


    /***
     * Check if the linked list contain a specific node or not
     * O(N) time | * O(1) space
     * @param node
     * @returns {boolean}
     */
    containsNode(node) {
        if(!this.length) return false

        let curr = this.head
        while(curr) {
            if(curr === node) return true
            curr = curr.next
        }
        return false
    }


    /***
     * Check if the given value exists in the node(s) of the list
     * O(N) time | * O(1) space
     * @param value
     * @returns {boolean}
     */
    containsNodeWithValue(value) {
        if(!this.head || value === undefined) return false

        let curr = this.head
        while(curr) {
            if(curr.value === value) return true
            curr = curr.next
        }
        return false
    }
}
