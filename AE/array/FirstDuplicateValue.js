/*
 * First Duplicate Value
 *
 * Given an array of integers between 1 and n, inclusive, where n is the length of the array,
 * write a function that returns the first integer that appears more than once
 * (when the array is read from left to right).
 *
 * In other words, out of all the integers that might occur more than once in the input array,
 * your function should return the one whose first duplicate value has the minimum index.
 *
 * If no integer appears more than once, your function should return -1.
 *
 * Note that you're allowed to mutate the input array.
 *
 * eg:
 *   Input:
 *     array = [2, 1, 5, 2, 3, 3, 4]
 *   Output:
 *     2    // 2 is the first integer that appears more than once.
 *          // 3 also appears more than once, but the second 3 appears after the second 2.
 */


/***
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param array
 * @returns {number}
 */
function firstDuplicateValue(array) {
    const seen = new Set()

    for (const el of array) {
        if(seen.has(el)) return el
        else seen.add(el)
    }

    console.log(seen)

    return -1
}


/***
 *
 * Another interesting solution, less space needed.
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @returns {number}
 */
function firstDuplicateValue2(array)  {
    for (const el of array) {
        const absEl = Math.abs(el)
        if(array[absEl - 1] < 0) return absEl
        else array[absEl - 1] *= -1
    }
    return -1
}
