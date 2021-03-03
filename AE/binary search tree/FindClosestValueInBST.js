/*
 * Find Closest Value In BST
 *
 * Write a function that takes in a Binary Search Tree (BST) and a target integer value
 * and returns the closest value to that target value contained in the BST.
 *
 * You can assume that there will only be one closest value.
 *
 * eg:
 *   Input:
 *     target = 12
 *     tree =  10
 *           /    \
 *          5     15
 *         / \   /  \
 *        2   5 13  22
 *       /        \
 *      1          14
 *   Output:
 *     13
 */


/***
 *
 * Traverse through a single thread based on the BST property (in this question, right >= curr and left < curr),
 * while keep updating the value closest to the target (having a difference with min abs),
 * until no where to traverse further then return the value
 *
 * avg O(log(N)) | worst O(N) time complexity
 * O(1) aux space
 *
 * @param tree (the head)
 * @param target
 * @returns {number}
 *
 */
function findClosestValueInBst(tree, target) {
    let curr = tree, currClosest = curr.value - target

    while(curr.left || curr.right) {
        if(target === curr.value) return curr.value
        else if(target > curr.value) {
            if(curr.right) {
                curr = curr.right
                currClosest = getClosest(curr.value, target, currClosest)
            }
            else return currClosest
        } else {
            if(curr.left) {
                curr = curr.left
                currClosest = getClosest(curr.value, target, currClosest)
            }
            else return currClosest
        }
    }

    return currClosest
}

function getClosest (v, t, cC) {
    return (Math.abs(v - t) < Math.abs(cC - t)) ? v : cC
}


/***
 *
 * Same idea but much more clean implementation
 *
 * avg O(log(N)) | worst O(N) time complexity
 * O(1) aux space
 *
 * @param tree (the head)
 * @param target
 * @returns {number}
 *
 */
function findClosestValueInBst2(tree, target) {
    let curr = tree, closest = curr.value

    while(curr) {
        if(Math.abs(target - curr.value) < Math.abs(target - closest)) closest = curr.value
        if(target < curr.value) curr = curr.left
        else if(target > curr.value) curr = curr.right
        else break
    }

    return closest
}

