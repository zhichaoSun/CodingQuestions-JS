class Node {
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}


export class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }


    /***
     * add a node at the end of the linked list
     * @param value
     */
    append(value) {
        let node = new Node(value)

        // if list is empty, add the element and make it head
        if(this.head === null) {
            this.head = node
        } else {
            let current = this.head

            // iterate to the end of the list and append node
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }


    /***
     * insert a node at the given index in the linked list
     * @param value
     * @param index
     * @returns {boolean}false when (index < 0 || index > size)
     */
    insertAt(value, index) {
        if(index < 0 || index > this.size) return false
        else {
            let node = new Node(value), curr = this.head, prev

            if(index === 0) {
                node.next = this.head
                this.head = node
            } else {
                let i = 0

                // iterate over the list to the given position
                while(i++ < index) {
                    prev = curr
                    curr = curr.next
                }

                // add value
                node.next = curr
                prev.next = node
            }
            this.size++
        }
    }


    /***
     * remove and return the node value from the linked list
     * @param value
     * @returns {number|boolean} value of the removed node or false if not found
     */
    removeElement(value) {
        let curr = this.head, prev = null

        // iterate over the list to find the the value
        while(curr) {
            if(curr.value === value) {
                // head or not
                if(prev === null) {
                    this.head = curr.next
                } else {
                    prev.next = curr.next
                }
                this.size--
                return curr.value
            }
            prev = curr
            curr = curr.next
        }
        return false
    }


    /***
     * return the index of a given value
     * @param value
     * @returns {number} the index of the value or -1 if not found
     */
    indexOf(value) {
        let curr = this.head, index = 0

        // iterate over the list to find the position of the value
        while(curr) {
            if(curr.value === value) return index
            curr = curr.next
            index ++
        }

        // return -1 if not found
        return -1
    }


    /***
     * return true if the linked list is empty
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0
    }


    /***
     * print all the value form head to tail
     */
    printList() {
        let curr = this.head, str = ""
        while(curr) {
            str += curr.value + (curr.next && " -> ")
            curr = curr.next
        }
        console.log(str)
    }


    linkedListToObject() {
        const object = {
            "linkedList": {
                "head": null,
                "nodes": []
            }
        }

        if(this.isEmpty()) return object
        else {
            object.linkedList.head = "0"
            let curr = this.head, i = 0
            while(curr) {
                object.linkedList.nodes[i] = {
                    "id": `${i}`,
                    "next": curr.next ? `${i+1}` : null,
                    "value": curr.value
                }
                curr = curr.next
                i++
            }
        }
        return object
    }
}
