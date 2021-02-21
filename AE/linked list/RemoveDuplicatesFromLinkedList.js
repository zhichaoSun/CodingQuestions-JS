/*
 *
 * Remove Duplicates From Linked List
 *
 * You're given the head of a Singly Linked List whose nodes are in SORTED order with respect to their values.
 * Write a function that returns a modified version of the Linked List that
 * doesn't contain any nodes with duplicate values.
 * The Linked List should be modified in place (i.e., you shouldn't create a brand new list),
 * and the modified Linked List should still have its nodes sorted with respect to their values.
 *
 * eg:
 *   given:
 *     1 -> 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6
 *   get:
 *     1 -> 3 -> 4 -> 5 -> 6
 *
 * O(N) time complexity
 * O(1) aux space
 *
 */


/***
 *
 * @param head
 * @returns {Node} head
 *
 */
function removeDuplicatesFromLinkedList(head) {
    let curr = head, next = head.next
    while(curr && next) {
        if(curr.value !== next.value) {
            curr.next = next
            next = next.next
            curr = curr.next
        } else {
            next = next.next
        }
        if(curr.next !== next) curr.next = next
    }
    return head
}


/***
 *
 * a more elegant and readable solution
 *
 * @param head
 * @returns {Node} head
 *
 */
function removeDuplicatesFromLinkedList2(head) {
    let curr = head
    while(curr) {
        let next = curr.next
        while(next && curr.value === next.value) {
            next = next.next
        }
        curr.next = next
        curr = next
    }
    return head
}
