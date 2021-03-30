/*
 * Array Of Products
 *
 * Write a function that takes in a non-empty array of integers and returns an array of the same length,
 * where each element in the output array is equal to the product of every other number in the input array.
 *
 * In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].
 *
 * Note that you're expected to solve this problem without using division.
 *
 * eg:
 *   Input:
 *     array = [5, 1, 4, 2]
 *   Output:
 *     [8, 40, 10, 20]
 *     // 8  is equal to 1 x 4 x 2
 *     // 40 is equal to 5 x 4 x 2
 *     // 10 is equal to 5 x 1 x 2
 *     // 20 is equal to 5 x 1 x 4
 */


/***
 *
 * O(N^2) time complexity
 * O(N) aux space
 *
 * @param array
 * @returns {[]}
 */
function arrayOfProducts(array) {
    const ans = []

    for (let i = 0; i < array.length; i++) {
        let seed = 1
        for (let j = 0; j < array.length; j++) {
            if(j !== i) seed *= array[j]
        }
        ans.push(seed)
    }

    return ans
}


/***
 *
 * Another interesting solution, faster
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param array
 * @returns {[]}
 */
function arrayOfProducts2(array) {
    let forwardSeed = 1
    const forwardProducts = new Array(array.length).fill(1)
    for (let i = 0; i < array.length; i++) {
        forwardProducts[i] = forwardSeed
        forwardSeed *= array[i]
    }

    let backwardSeed = 1
    const backwardProducts = new Array(array.length).fill(1)
    for (let i = array.length - 1; i > -1; i--) {
        backwardProducts[i] = backwardSeed
        backwardSeed *= array[i]
    }

    const ans = []
    for (let i = 0; i < array.length; i++) {
        ans.push(forwardProducts[i] * backwardProducts[i])
    }

    return ans
}

console.log(arrayOfProducts2([5,1,4,2]))
