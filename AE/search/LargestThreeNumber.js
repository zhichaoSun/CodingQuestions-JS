/*
 * Find Three Largest Numbers
 *
 * Write a function that takes in an array of at least three integers and,
 * without sorting the input array,
 * returns a sorted array of the three largest integers in the input array.
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux time
 *
 * @param array
 * @returns {number[]}
 *
 */
export function findThreeLargestNumbers(array) {
    let l3 = [-Infinity, -Infinity, -Infinity]

    for(let ai = 0; ai < array.length; ai++) {
        if(array[ai] >= l3[2]) {
            l3[0] = l3[1]
            l3[1] = l3[2]
            l3[2] = array[ai]
        } else if (array[ai] >= l3[1] && array[ai] < l3[2]) {
            l3[0] = l3[1]
            l3[1] = array[ai]
        } else if (array[ai] >= l3[0] && array[ai] < l3[1]) {
            l3[0] = array[ai]
        }
    }

    return l3
}