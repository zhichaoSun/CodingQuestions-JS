/*
 * Find Loop
 *
 * Write a function that takes in the head of a Singly Linked List that contains a loop
 * (in other words, the list's tail node points to some node in the list instead of None / null).
 * The function should return the node (the actual node--not just its value) from which the loop originates in constant space.
 *
 * Each LinkedList node has an integer value as well as a next node pointing to the next node in the list.
 *
 * eg:
 *   Input:
 *     head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value 0
 *                                ^         v
 *                                9 <- 8 <- 7
 *   Output:
 *     4 -> 5 -> 6 // the node with value 4
 *     ^         v
 *     9 <- 8 <- 7
 */

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/***
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param head
 * @returns {LinkedList} newHead
 */
function findLoop(head) {
    let curr = head, visited = []

    while(!visited.includes(curr)) {
        visited.push(curr)
        curr = curr.next
    }

    return curr
}