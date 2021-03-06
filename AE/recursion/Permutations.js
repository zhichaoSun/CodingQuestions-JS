/*
 *
 * Permutations
 *
 * Write a function that takes in an array of unique integers
 * and returns an array of all permutations of those integers in no particular order.
 * If the input array is empty, the function should return an empty array.
 *
 * eg:
 *   Input:
 *     array = [1, 2, 3]
 *   Output:
 *     [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */


/***
 *
 * O(N*N!) time complexity
 * O(N*N!) aux space
 *
 * @param array
 * @returns {[]}
 *
 */

function getPermutations(array) {
    if(!array.length) return []
    if(array.length === 1) return [array]
//     if(array.length === 2) return [[array[0], array[1]], [array[1], array[0]]]

    let permutations = [], restPermutations = []

    for (const element of array) {
        const rest = array.filter(el => el !== element)
        restPermutations = getPermutations(rest)
        for(const rElement of restPermutations) {
            permutations = [...permutations, [element, ...rElement]]
        }
    }

    return permutations
}

console.log(JSON.stringify(getPermutations([1])))
