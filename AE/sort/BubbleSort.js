/***
 *
 * Bubble sort
 *
 * O(N^2) time complexity
 * O(1) aux space
 *
 * @param array
 */

/**
 *
 * slight optimization by ignoring the nth largest element in nth pass
 *
 */
export function bubbleSort(array) {
    let n = array.length, count = 0
    while(true) {
        let swapped = false
        for(let i = 0; i < n-1 - count; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
            }
        }
        count++
        if(!swapped) break
    }
}

/***
 *
 * slight optimization by ignoring the multiple largest elements each pass
 * by recording and using the last swapped element's index
 *
 */
export function bubbleSort2(array) {
    let n = array.length, count = 0
    while(true) {
        let swapped = false
        for(let i = 0; i < n-1; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
                count = i + 1
            }
        }
        n = count
        if(!swapped) break
    }
}
