/*
 * Max Subset Sum Adjacent
 *
 * Write a function that takes in a non-empty array of integers and returns the maximum sum
 * that can be obtained by summing up all of the integers in a non-empty subarray of the input array.
 * A subarray must only contain adjacent numbers (numbers next to each other in the input array).
 *
 * eg:
 *   Input:
 *     array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
 *   Output:
 *     19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux time
 *
 * @param array
 * @returns {number}
 *
 */
function maxSubsetSumAdjacent(array) {
    let globalMax = array[0], localMax = array[0], sum = array[0]

    for (let i = 1; i < array.length; i++) {
        if(sum < 0) sum = 0
        sum += array[i]
        localMax = Math.max(sum, localMax)
        globalMax = Math.max(globalMax, localMax)
    }

    return globalMax
}
