/***
 *
 * Two Number Sum
 *
 * Takes in a non-empty array of distinct integers and
 * an integer representing a target sum.
 *   If any two numbers in the input array sum up to the target sum,
 *   the function should return them in an array, in any order.
 *   If no two numbers sum up to the target sum,
 *   the function should return an empty array.
 *
 * eg:
 *   Input:
 *     array = [3, 5, -4, 8, 11, 1, -1, 6]
 *     sum = 10
 *   Output:
 *     [-1, 11]
 *
 * Assume at most one pair.
 *
 */


/***
 *
 * O(N*log(N)) time complexity (array.sort)
 * O(1) aux space
 *
 * @param array
 * @param targetSum
 * @returns {*[]}
 */
function twoNumberSum(array, targetSum) {
    let left = 0, right = array.length - 1
    array = array.sort((a, b) => a - b)

    while(left !== right) {
        let currentSum = array[left] + array[right]
        if(currentSum === targetSum) return [array[left], array[right]]
        else if(currentSum < targetSum) left++
        else right--
    }

    return []
}


console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
