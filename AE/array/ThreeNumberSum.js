/*
 * Three Number Sum
 *
 * Write a function that takes in a non-empty array of DISTINCT integers and an integer representing a target sum.
 * The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets.
 * The numbers in each triplet should be ordered in ascending order,
 * and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
 *
 * If no three numbers sum up to the target sum, the function should return an empty array.
 *
 * eg:
 *   Input:
 *     array = [12, 3, 1, 2, -6, 5, -8, 6]
 *     targetSum = 0
 *   Output:
 *     [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 *
 */


/***
 *
 * O(N^2) time complexity
 * O(1) aux space
 *
 * @param array
 * @param targetSum
 * @returns {[]}
 */
function threeNumberSum2(array, targetSum) {
    let ans = []
    array.sort((a, b) => a - b) // O(log(N)) time complexity

    for (let i = 0; i < array.length; i++) {
        let left = i + 1, right = array.length - 1

        while(right - left > 0) {
            const thisSum = array[left] + array[i] + array[right]
            if (thisSum === targetSum) {
                ans.push([array[i], array[left], array[right]])
                left++
                right--
            }
            else if (thisSum < targetSum) left++
            else right--
        }
    }
    return ans
}
