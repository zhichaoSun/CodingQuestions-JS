/*
 * Single Cycle Check
 *
 * You're given an array of integers where each integer represents a jump of its value in the array.
 * For instance, the integer 2 represents a jump of two indices forward in the array;
 * the integer -3 represents a jump of three indices backward in the array.
 *
 * If a jump spills past the array's bounds, it wraps over to the other side.
 * For instance, a jump of -1 at index 0 brings us to the last index in the array.
 * Similarly, a jump of 1 at the last index in the array brings us to index 0.
 *
 * Write a function that returns a boolean representing whether the jumps in the array form a single cycle.
 * A single cycle occurs if, starting at any index in the array and following the jumps,
 * every element in the array is visited exactly once before landing back on the starting index.
 *
 * eg:
 *   Input:
 *     array = [2, 3, 1, -4, -4, 2]
 *   Output:
 *     true
 */


/***
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param array
 * @returns {boolean}
 */
function hasSingleCycle(array) {
    let nextIndex = 0, visited = []
    const n = array.length
    for(let i = 0; i < n; i++) {
        nextIndex = nextIndex + array[nextIndex]
        while(nextIndex < 0) {
            nextIndex += n
        }
        nextIndex %= n
        if(visited.includes(nextIndex)) return false
        visited.push(nextIndex)
    }
    return true
}


/***
 *
 * Optimized solution
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @returns {boolean}
 */
function hasSingleCycle2(array) {
    const n = array.length
    let sum = 0, nextIndex = 0
    for(let i = 0; i < n; i++) {
        sum += array[nextIndex]
        nextIndex = nextIndex + array[nextIndex]
        while(nextIndex < 0) {
            nextIndex += n
        }
        nextIndex %= n

        // if index goes back to 0 before visiting all of [array.length] elements
        if(nextIndex === 0 && i !== n - 1) return false
    }

    // if go back to 0 after [array.length] run
    return nextIndex === 0
}
