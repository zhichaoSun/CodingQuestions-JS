/*
 * Rearrange array alternatively
 *
 * Given a sorted array of positive integers.
 * Your task is to rearrange the array elements alternatively
 * i.e first element should be max value,
 *     second should be min value,
 *     third should be second max,
 *     fourth should be second min and so on.
 *
 * eg:
 */


/***
 * Mathematical solution
 *
 * O(N) aux space
 *
 *
 * @param arr
 * @param n
 */
function rearrange1(arr, n) {
    let arr2 = [...arr]
    for(let i = 0; i < n/2; i++) {
        arr[2*i] = arr2[n-1 - i]
        arr[2*i + 1] = arr2[i]
    }
    if(n%2) arr.pop()

    // console.log(arr)
}


/***
 * Refer to: https://youtu.be/ZRoVWxBngX0
 * Bind [current] and [the replacement of current] in to a single number
 * so that we can retrieve both of them in to final result later
 *
 * O(1) aux space
 *
 * @param arr
 * @param n
 */
function rearrange2(arr, n) {
    let max = n-1, min = 0, maxEl = arr[n-1] + 1; // maxEL need to be greater than arr[n-1] at least
    for(let i = 0; i < n; i++) {
        if(i%2) {
            arr[i] += arr[min] % maxEl * maxEl
            min++
        } else {
            arr[i] += arr[max] % maxEl * maxEl
            max--
        }
    }

    for(let i = 0; i < n; i++) {
        arr[i] = parseInt(arr[i] / maxEl)
    }

    // console.log(arr)
}

rearrange2([1,2,3,4,5,6,7], 7)
rearrange2([1,2,3,4,5,6,7,8], 8)
