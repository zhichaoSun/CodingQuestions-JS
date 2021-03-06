/*
 * You're given an array of integers and another array of three distinct integers.
 * The first array is guaranteed to only contain integers that are in the second array, and 
 * the second array represents a desired order for the integers in the first array.
 *
 * For example, a second array of [x, y, z], represents a desired order of
 * [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.
 *
 * Write a function that sorts the first array according to the desired order in the second array.
 * The function should perform this in place (i.e., it should mutate the input array),
 * and it shouldn't use any auxiliary space (i.e., it should run with constant space: O(1) space)
 *
 */

/***
 *
 * move unmatched element to the end of the array * 3 times
 *
 * O(N^2) time complexity
 * O(1) aux space
 *
 * @param array
 * @param order array
 * @returns sorted array
 *
 */
export function threeNumberSort(array, order) {
    let oi = order.length - 1
    while(oi >= 0) {
        let index = 0

        for(let ai = 0; ai < array.length; ai++) {
            if(array[index] !== order[oi]) { // if !=current order, move it to end
                array.push(array[index])
                array.splice(index, 1)
            } else index++ // if == current order, then dont move
        }
        oi--
    }

    return array
}


/***
 *
 * another interesting solution
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @param order array
 * @returns sorted array
 *
 */
export function threeNumberSort2(array, order) {
    let numberCount = [0, 0, 0]
    for(let ai = 0; ai < array.length; ai++) {
        const ni = order.indexOf(array[ai])
        numberCount[ni]++
    } // count the numbers and fill in an array

    for(let i = 0; i < 3; i++) {
        let count = numberCount[i]
        let numbersBefore = numberCount.slice(0, i).reduce((acc, numCount) => acc + numCount, 0)

        for(let ai = 0; ai < count; ai++) {
            array[ai+numbersBefore] = order[i]
        }
    }

    return array
}
