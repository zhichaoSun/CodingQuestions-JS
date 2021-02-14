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
 *
 */
function equilibriumPoint(a, n) {
    if(n===1) return 1;

    let [start, end, left, right] = [0, n-1, a[0], a[n-1]]

    while(end - start > 2) {
        if(left > right) {
            end--
            right+=a[end]
            // console.log(`right: ${end}`, right)
        }
        if(left < right) {
            start++
            left+=a[start]
            // console.log(`left: ${start}`, left)
        }
        if(left === right) {
            if(end - start === 2) {
                // console.log(`${start}, ${end}`)
                return 1 + (start + end) / 2
            }
            else {
                start++
                end--
                right+=a[end]
                left+=a[start]
            }
        }
    }
    return -1
}

/***
 *
 * another interesting solution
 *
 * O(N) time complexity but slower than above
 * O(1) aux space
 *
 */
function equilibriumPoint2(a, n) {
    if(n===1) return 1;

    let sum = 0, leftSum = 0

    for(let i = 0; i < n; i++) {
        sum += a[i]
    }

    for(let i = 0; i < n; i++) {
        // console.log("l: ", leftSum, `sum-a[${i}]`, (sum-a[i])/2)
        if(leftSum > (sum - a[i]) / 2) return -1
        if(leftSum === (sum - a[i]) / 2) return ++i
        leftSum += a[i]
    }
}


const ans1 = equilibriumPoint([20, 17, 42, 25, 32, 32, 30, 32, 37, 9, 2, 33, 31, 17, 14, 40, 9, 12, 36, 21, 8, 33, 6, 6, 10, 37, 12, 26, 21, 3], 30)
const ans2 = equilibriumPoint2([20, 17, 42, 25, 32, 32, 30, 32, 37, 9, 2, 33, 31, 17, 14, 40, 9, 12, 36, 21, 8, 33, 6, 6, 10, 37, 12, 26, 21, 3], 30)

console.log(ans1)
console.log(ans2)