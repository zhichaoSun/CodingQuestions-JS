/*
 * Max Subset Sum No Adjacent
 *
 * Write a function that takes in an array of positive integers and returns the maximum sum
 * of non-adjacent elements in the array.
 *
 * If the input array is empty, the function should return 0.
 *
 * eg:
 *   Input:
 *     array = [75, 105, 120, 75, 90, 135]
 *   Output:
 *     330
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @returns {number}
 *
 */
function maxSubsetSumNoAdjacent(array) {
    if(!array.length) return 0
    if(array.length === 1) return array[0]

    let ans = Math.max(array[0], array[1])
    if(array.length === 2) return ans

    let potentialAns = array[0]
    for (let i = 2; i < array.length; i++) {
        const temp = ans
        ans = Math.max(ans, array[i] + potentialAns)
        potentialAns = temp
    }
    return ans
}
