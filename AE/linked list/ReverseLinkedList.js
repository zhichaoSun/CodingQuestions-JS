/*
 *
 * Reverse Linked List
 *
 * Assume that the input linked list will always have at least 1 node
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param head
 * @returns new head
 *
 */
function reverseLinkedList(head) {
    let next, prev = null, curr = head
    while(curr !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

