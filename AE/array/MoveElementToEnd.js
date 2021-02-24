/*
 *
 * Move Element To End
 *
 * You're given an array of integers and an integer.
 * Write a function that moves all instances of that integer in the array
 * to the end of the array and returns the array.
 *
 * The function should perform this in place (i.e., it should mutate the input array)
 * and doesn't need to maintain the order of the other integers.
 *
 * eg:
 *   Input:
 *     array = [2, 1, 2, 2, 2, 3, 4, 2]
 *     toMove = 2
 *   Output:
 *     [1, 3, 4, 2, 2, 2, 2, 2]
 *     *the numbers 1, 3, and 4 could be ordered differently
 *
 */


/***
 *
 * Easy but not a very good solution using splice() and push() methods,
 * where splice() is, worst case, O(N).
 *
 * O(N^2) time complexity
 * O(1) aux space
 *
 * @param array
 * @param toMove
 * @returns modified array
 *
 */
function moveElementToEnd(array, toMove) {
    let index = 0, i = 0
    while(i++ < array.length) {
        if(array[index] === toMove) {
            array.splice(index, 1)
            array.push(toMove)
        } else {
            index++
        }
        console.log(array)
    }
}
