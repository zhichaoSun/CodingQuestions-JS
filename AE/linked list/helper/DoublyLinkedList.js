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


    pop() {
        if(!this.length) return false

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


    shift() {
        if(!this.length) return false

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


    printHeadToTail() {
        let curr = this.head, str = ""
        while(curr) {
            str += (curr.value + (curr.next && " <-> "))
            curr = curr.next
        }
        console.log(str)
    }


    printTailToHead() {
        let curr = this.tail, str = ""
        while(curr) {
            str += (curr.value + (curr.prev && " <-> "))
            curr = curr.prev
        }
        console.log(str)
    }


    removeHead() {
        if(!this.length) return false

        let curr = this.head
        this.head = this.head.next
        this.head.prev = null
        curr.next = null

        this.length--
    }


    removeTail() {
        if(!this.length) return false

        let curr = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        curr.prev = null

        this.length--
    }


    setHead(node) {
        // TODO
    }


    setTail(node) {
        // TODO
    }


    insertBefore(node, nodeToInsert) {
        // TODO
    }


    insertAfter(node, nodeToInsert) {
        // TODO
    }


    insertAtPosition(position, nodeToInsert) {
        // TODO
    }


    // removeNodesWithValue(value) {
    //     if(!this.containsNodeWithValue(value)) return false
    //
    //     let curr = this.head
    //     while(curr) {
    //         if(curr.value === value) {
    //             if(curr === this.head) {
    //                 if(this.length === 1) {
    //                     this.head = null
    //                     this.tail = null
    //                     this.length--
    //                     return true
    //                 }
    //             }
    //         }
    //     }
    // }


    remove(node) {
        if(!this.containsNodeWithValue(node?.value)) return false

        let curr = this.head
        while(curr) {
            if(curr === node) {
                if(this.length === 1) {
                    this.head = null
                    this.tail = null
                    this.length--
                    return true
                } else {
                    this.length--
                    if(this.head === node) {
                        this.head = node.next
                        this.head.prev = null
                        node.next = null
                        return true
                    } else if(this.tail === node) {
                        this.tail = node.prev
                        this.tail.next = null
                        node.prev = null
                        return true
                    } else {
                        node.prev.next = node.next
                        node.next.prev = node.prev
                        node.prev = null
                        node.next = null
                        return true
                    }
                }
            }
            curr = curr.next
        }
        return false
    }


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

const dll   = new DoublyLinkedList()
const head  = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const tail  = new Node(5)

dll.push(head)
dll.push(node2)
dll.push(node3)
dll.push(node4)
dll.push(tail)

dll.printHeadToTail()
dll.printTailToHead()

console.log(dll.containsNodeWithValue(0))

dll.remove(dll.tail)
dll.printHeadToTail()
