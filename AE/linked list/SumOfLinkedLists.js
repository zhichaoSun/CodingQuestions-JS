/*
 * Sum of Linked Lists
 *
 * You're given two Linked Lists of potentially unequal length.
 * Each Linked List represents a non-negative integer, where each node in the Linked List is a digit of that integer,
 * and the first node in each Linked List always represents the least significant digit of the integer.
 *
 * Write a function that returns the head of a new Linked List
 * that represents the sum of the integers represented by the two input Linked Lists.
 *
 * Each LinkedList node has an integer value as well as a next node pointing to the next node in the list
 * or to None / null if it's the tail of the list.
 * The value of each LinkedList node is always in the range of 0 - 9.
 *
 * Note: your function must create and return a new Linked List,
 * and you're not allowed to modify either of the input Linked Lists.
 *
 * eg:
 *   Input:
 *     linkedListOne = 2 -> 4 -> 7 -> 1 //1742
 *     linkedListTwo = 9 -> 4 -> 5      // 549
 *   Output:
 *     1 -> 9 -> 2 -> 2                 //2291
 */


class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/***
 *
 * O(max(M, N)) time complexity
 * O(max(M, N)) aux space
 *
 * @param linkedListOne
 * @param linkedListTwo
 * @returns {LinkedList}
 */
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let nodeOne = linkedListOne, nodeTwo = linkedListTwo
    const ans = new LinkedList(0)
    let currNode = ans

    while(nodeOne !== null || nodeTwo !== null) {
        const currentDigitSum = (nodeOne?.value ?? 0) + (nodeTwo?.value ?? 0) + currNode.value
        let carried = currentDigitSum >= 10

        currNode.value = currentDigitSum % 10

        nodeOne = nodeOne?.next ?? null
        nodeTwo = nodeTwo?.next ?? null

        if(carried) currNode.next = new LinkedList(1)
        else {
            if(nodeOne !== null || nodeTwo !== null) currNode.next = new LinkedList(0)
        }

        currNode = currNode.next
    }
    return ans
}


