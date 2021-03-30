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

console.log(arrayOfProducts([5,1,4,2]))
