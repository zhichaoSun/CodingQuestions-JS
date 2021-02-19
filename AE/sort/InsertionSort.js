/***
 *
 * Insertion sort
 *
 * avg: O(N^2), best: O(N); worst: O(N^2) time complexity
 * O(1) aux space
 *
 */

/***
 *
 * @param array
 * @returns sorted array
 *
 */
export function insertionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let j = i
        while(j > 0 && array[j] < array[j-1]) {
            let temp = array[j]
            array[j] = array[j-1]
            array[j-1] = temp

            j--
        }
    }
    return array
}
