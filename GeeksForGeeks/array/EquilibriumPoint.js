class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        if(n==1) return 1;

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
            if(left == right) {
                if(end - start == 2) {
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
}

const obj = new Solution()
const ans = obj.equilibriumPoint([20, 17, 42, 25, 32, 32, 30, 32, 37, 9, 2, 33, 31, 17, 14, 40, 9, 12, 36, 21, 8, 33, 6, 6, 10, 37, 12, 26, 21, 3], 30)

console.log(ans)