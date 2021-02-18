/***
 *
 * Validate Subsequence
 *
 * Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a subsequence of the first one.
 *
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array
 * but that are in the SAME ORDER as they appear in the array.
 *
 * eg:
 *   Input:
 *     [1, 2, 3, 4] [1, 3, 4]
 *   Output:
 *     true
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @param sequence
 * @returns {boolean}
 *
 */
export function isValidSubsequence(array, sequence) {
    let ai = 0, si = 0
    while(ai < array.length && si < sequence.length) {
        if(array[ai] === sequence[si]) si++
        ai++
    }
    return si === sequence.length
}
