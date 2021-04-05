/*
 * Merge Overlapping Intervals
 *
 * Write a function that takes in a non-empty array of arbitrary intervals,
 * merges any overlapping intervals, and returns the new intervals in no particular order.
 *
 * Each interval interval is an array of two integers,
 * with interval[0] as the start of the interval and interval[1] as the end of the interval.
 *
 * Note that back-to-back intervals aren't considered to be overlapping.
 * For example,
 *     [1, 5] and [6, 7] aren't overlapping; however,
 *     [1, 6] and [6, 7]are indeed overlapping.
 *
 * Also note that the start of any particular interval will always be less than or equal to the end of that interval.
 *
 * eg:
 *   Input:
 *     intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
 *   Output:
 *     [[1, 2], [3, 8], [9, 10]] // Merge the intervals [3, 5], [4, 7], and [6, 8].
 *                               // The intervals could be ordered differently.
 */


/***
 *
 * O(N*log(N)) time complexity
 * O(N) aux space
 *
 * @param array
 * @returns {[[]]}
 */
function mergeOverlappingIntervals(array) {
    let ans = [array[0]]

    for (let i = 1; i < array.length; i++) {
        const curr = array[i], ansLast = ans[ans.length - 1]

        if (ansLast[1] < curr[0]) ans.push(curr)
        else {
            ans.push([ans.pop()[0], curr[1]])
        }
    }
    return ans;
}

