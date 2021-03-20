/*
 * Monotonic Array
 *
 * Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
 *
 * An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
 *
 * Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase.
 * Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.
 *
 * Note that empty arrays and arrays of one element are monotonic.
 *
 * eg:
 *   Input:
 *     array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
 *   Output:
 *     true
 */


/***
 * Let delta be the difference of every adjacent 2 elements,
 * if (current delta) * (last delta) is 0 or negative, then the direction was not changing, continue;
 * else return false since it changed.
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @returns {boolean}
 */
function isMonotonic(array) {
    let lastDelta  = 0
    for (let i = 0; i < array.length; i++) {
        const currDelta = array[i] - array[i-1]
        if(currDelta * lastDelta < 0) return false

        if(currDelta !== 0) lastDelta = currDelta
    }

    return true
}

console.log(isMonotonic([-1, -1, -10, -1100, -1101, -1102, -9001]))




