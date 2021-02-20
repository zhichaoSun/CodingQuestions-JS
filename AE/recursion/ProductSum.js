/*
 *
 * Product Sum
 *
 * Write a function that takes in a "special" array and returns its product sum.
 * A "special" array is a non-empty array that contains either integers or other "special" arrays.
 * The product sum of a "special" array is the sum of its elements,
 * where "special" arrays inside it are summed themselves and then multiplied by their level of depth.
 *
 * eg:
 *   for [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 *   it product sum is 12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * [6 + 3 * (-13 + 8) + 4]
 *
 */


/***
 *
 * O(N) time complexity
 * O(D) aux space, where D is the greatest depth of the "special" arrays in the array
 *
 * @param array
 * @param depth
 * @returns product sum
 *
 */
export function productSum(array, depth= 2) {
    let ans = 0
    for(let i = 0; i < array.length; i++) {
        if(!Array.isArray(array[i])) ans += array[i]
        else ans += depth * productSum(array[i], depth+1)
    }
    return ans
}
