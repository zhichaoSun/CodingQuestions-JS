/*
 *
 * Remove Kth Node From End
 *
 * Write a function that takes in the head of a Singly Linked List and an integer k
 * and removes the kth node from the end of the list.
 *
 * The removal should be done in place, meaning that the original data structure should be mutated
 * (no new structure should be created).
 *
 * Furthermore, the input head of the linked list should remain the head of the linked list
 * after the removal is done, even if the head is the node that's supposed to be removed.
 * In other words, if the head is the node that's supposed to be removed,
 * your function should simply mutate its value and next pointer.
 *
 * You can assume that the input Linked List will always have at least two nodes and,
 * more specifically, at least k nodes.
 *
 */

/***
 *
 * Traverse the linked list first, count its length,
 * then remove the node over the second traverse
 *
 * @param head
 * @param k
 *
 */
function removeKthNodeFromEnd(head, k) {
    let curr = head, count = 0
    while(curr) {
        count++
        curr = curr.next
    }

    curr = head
    let prev = null
    for(let i = 0; i < count - k; i++) {
        prev = curr
        curr = curr.next
    }

    if(count === k) {
        let next = curr.next
        curr.value = next.value
        curr.next = next.next
        return
    }
    prev.next = curr.next
}


/***
 *
 * Another interesting solution.
 *   1. Set 2 node,
 *   2. the early-go one traverse over the linked list to (k+1)th node,
 *   3. if now the early-go node === null --> k === length, just remove the head
 *   4. now start traversing both early-go and late-go
 *   5. when early-go === tail --> late-go.next if the node to be removed
 *   6. remove the late-go.next
 *
 * @param head
 * @param k
 *
 */
function removeKthNodeFromEnd2(head, k) {
    let early = head, late = head
    while(k--) early = early.next

    if(!early) {
        head.value = head.next.value
        head.next = head.next.next
        return
    }

    while(early.next) {
        early = early.next
        late = late.next
    }

    late.next = late.next.next
}
