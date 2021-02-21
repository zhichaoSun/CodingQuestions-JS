/*
 *
 * Remove Duplicates From Linked List
 *
 * eg:
 *   given:
 *     1 -> 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6
 *   get:
 *     1 -> 3 -> 4 -> 5 -> 6
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param head
 * @returns head
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