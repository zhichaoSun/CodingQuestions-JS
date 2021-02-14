/*
 * Equilibrium Point
 *
 * Given an array A of N positive numbers.
 * The task is to find the first Equilibium Point in the array.
 * Equilibrium Point in an array is a position such that
 * the sum of elements before it is equal to the sum of elements after it.
 *
 * eg:
 *   Input:
 *     N = 5
 *     A[] = {1,3,5,2,2}
 *   Output:
 *     3
 *   Explanation:
 *     equilibrium point is at position 3
 *     as elements before it (1+3) = elements after it (2+2).
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param a
 * @param n
 * @returns the Equilibrium Point or -1 if not exists
 */
function equilibriumPoint(a, n) {
    if(n===1) return 1;

    let [start, end, left, right, ans] = [0, n-1, a[0], a[n-1], -1]

    while(end - start > 2) {
        if(left > right) {
            end--
            right+=a[end]
            console.log(`right: ${end}`, right)
        }
        if(left < right) {
            start++
            left+=a[start]
            console.log(`left: ${start}`, left)
        }
        if(left === right) {
            if(end - start === 2) {
                console.log(`${start}, ${end}`)
                ans = 1 + (start + end) / 2
            }
            else {
                start++
                end--
                right+=a[end]
                left+=a[start]
            }
        }
    }

    return ans
}



const ans = equilibriumPoint([20, 17, 42, 25, 32, 32, 30, 32, 37, 9, 2, 33, 31, 17, 14, 40, 9, 12, 36, 21, 8, 33, 6, 6, 10, 37, 12, 26, 21, 3], 30)

console.log(ans)