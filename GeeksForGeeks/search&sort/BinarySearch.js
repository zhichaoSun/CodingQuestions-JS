/***
 *
 * Binary Search
 *
 * @param arr
 * @param n
 * @param el
 * @returns {number}: index or -1 when not foundd
 */
export function binarySearch(arr, n, el) {
    let left = 0, right = arr.length-1

    while(left <= right) {
        let mid = Math.floor((left + right)/2)
        console.log("left:", left, "mid:", mid, "right:", right)

        if(arr[mid] === el) return mid
        else if(arr[mid] > el) right = mid - 1
        else left = mid + 1


        console.log("left:", left, "mid:", mid, "right:", right)
        console.log()
    }
    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
//   0  1  2  3  4  5  6  7  8  9   10  11   12   13
const el = 1252
const ans = binarySearch(arr, arr.length, el)
console.log("ans:", ans)


/***
 *
 * Binary Search (recursively)
 *
 * @param arr
 * @param left
 * @param right
 * @param el
 * @returns {number}: index or -1 when not found
 *
 */
export function binarySearchR(arr, left, right, el) {
    if(left > right) return -1;

    let i = Math.floor((right+left)/2);
    console.log("i:", i)

    if(arr[i] === el) return i;
    else if(arr[i] < el) return binarySearchR(arr, i+1, right, el);
    else if(arr[i] > el) return binarySearchR(arr, left, i-1, el);
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
//         //   0  1  2  3  4  5  6  7  8  9   10  11   12   13
// const el = 1252
// const ans = binarySearchR(arr, 0, arr.length, el)
// console.log("ans:", ans)





export function binarySearchUpperB(arr, left, right, el) {
    if(left > right) return right+1;

    let i = Math.floor((right+left)/2);
    console.log("left:", left, "\ti:", i, "\tright:", right)
    if(i == arr.length) return -1;

    if(arr[i] == el) return i;
    else if(arr[i] < el) return binarySearchUpperB(arr, i+1, right, el);
    else if(arr[i] > el) return binarySearchUpperB(arr, left, i-1, el);
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
//         //   0  1  2  3  4  5  6  7  8  9   10  11   12   13
// const el = 0
// const ans = binarySearchUpperB(arr, 0, arr.length, el)
// console.log("ans:", ans)


export function binarySearchLowerB(arr, left, right, el) {
    if(left > right) return left-1;

    let i = Math.floor((right+left)/2);
    console.log("left:", left, "\ti:", i, "\tright:", right)
    if(i == arr.length) return arr.length-1;

    if(arr[i] == el) return i;
    else if(arr[i] < el) return binarySearchLowerB(arr, i+1, right, el);
    else if(arr[i] > el) return binarySearchLowerB(arr, left, i-1, el);
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
//         //   0  1  2  3  4  5  6  7  8  9   10  11   12   13
// const el = 0
// const ans = binarySearchLowerB(arr, 0, arr.length, el)
// console.log("ans:", ans)

