/*
 * Longest Peak
 *
 * Write a function that takes in an array of integers and returns the length of the longest peak in the array.
 *
 * A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip
 * (the highest value in the peak), at which point they become strictly decreasing.
 * At least three integers are required to form a peak.
 *
 * For example,
 *   the integers 1, 4, 10, 2 form a peak, but
 *   the integers 4, 0, 10 don't and
 *   neither do the integers 1, 2, 2, 0. Similarly,
 *   the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3
 *
 * eg:
 *   Input:
 *     array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
 *   Output:
 *     6 //0, 10, 6, 5, -1, -3
 */


/***
 *
 * Too much edge cases to take care of...
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @returns {number}
 */
function longestPeak(array) {
    if(array.length < 3) return 0

    let ps = 0, pe = 0, gl = 0
    let increasing = array[1] - array[0] > 0, increased = increasing

    for (let i = 1; i < array.length - 1; i++) {
        const curr = array[i], next = array[i + 1]

        if(increasing) {
            if(curr < next) increased = true
            else if(curr === next) {
                ps = i + 1
                pe = ps
                increased = false
            }
            else if(curr > next && increased) {
                increasing = false
                pe = i + 1
            }
        } else {
            if(curr > next && increased) pe = i + 1
            else if(curr === next && increased) {
                ps = i + 1
                pe = ps
            }
            else if(curr < next) {
                increased = true
                increasing = true
                ps = i
                pe = ps
            }
        }

        if(pe !== ps) gl = Math.max(gl, pe - ps + 1)
    }

    return gl
}


/***
 *
 * Determine if a element is a tip of the peak, then count the length of this tip's peak
 * Will be slower than the solution above but much easier and more readable
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param array
 * @returns {number}
 *
 */
function longestPeak2(array) {
    let longestPeakLength = 0

    for (let i = 1; i < array.length - 1; i++) {
        const last = array[i - 1], curr = array[i], next = array[i + 1]

        if(last < curr && curr > next) {
            longestPeakLength = Math.max(longestPeakLength, findPeakLength(i, array))
        }
    }

    return longestPeakLength
}

function findPeakLength(tipIndex, array) {
    let ps = tipIndex - 1, pe = tipIndex + 1
    let leftChanged = true, rightChanged = true

    while(leftChanged || rightChanged) {
        if(array[ps - 1] < array[ps]) ps--
        else leftChanged = false

        if(array[pe + 1] < array[pe]) pe++
        else rightChanged = false
    }

    return pe - ps + 1
}
