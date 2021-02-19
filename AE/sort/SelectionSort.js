/***
 *
 * Selection sort
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
export function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
        let minIdx = i
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[minIdx]) {
                minIdx = j
            }
        }
        let temp = array[i]
        array[i] = array[minIdx]
        array[minIdx] = temp
    }
    return array
}