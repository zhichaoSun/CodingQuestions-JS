/*
 * Spiral Traverse
 *
 * Write a function that takes in an n * m two-dimensional array (that can be square-shaped when n == m)
 * and returns a one-dimensional array of all the array's elements in spiral order.
 *
 * Spiral order starts at the top left corner of the two-dimensional array, goes to the right,
 * and proceeds in a spiral pattern all the way until every element has been visited.
 *
 * eg:
 *   Input:
 *     array = [[1,  2,  3,  4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10, 9,  8,  7]]
 *   Output:
 *     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */


/***
 *
 * O(n) time complexity
 * O(n) aux space
 *
 * @param {[[]]} array
 * @returns {[]}
 */
function spiralTraverse(array) {
    let direction = "right", ans = []
    let rightB = array[0].length - 1, lowerB = array.length - 1, leftB = 0, upperB = 0

    while(ans.length <= array[0].length * array.length - 1) {
        if (direction === "right") {
            for (let k = leftB; k <= rightB; k++) {
                ans.push(array[upperB][k])
            }
            upperB++
            direction = "down"
        }
        else if (direction === "down") {
            for (let k = upperB; k <= lowerB; k++) {
                ans.push(array[k][rightB])
            }
            rightB--
            direction = "left"
        }
        else if (direction === "left") {
            for (let k = rightB; k >= leftB; k--) {
                ans.push(array[lowerB][k])
            }
            lowerB--
            direction = "up"
        }
        else if (direction === "up") {
            for (let k = lowerB; k >= upperB; k--) {
                ans.push(array[k][leftB])
            }
            leftB++
            direction = "right"
        }
    }

    return ans
}
