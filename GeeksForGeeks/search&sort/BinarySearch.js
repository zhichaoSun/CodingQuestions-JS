/***
 *
 * Binary Search
 *
 * @param arr
 * @param el
 * @returns {number}: index or -1 when not found
 *
 */
export function binarySearch(arr, el) {
    let left = 0, right = arr.length-1

    while(left <= right) {
        let mid = Math.floor((left + right)/2)
        // console.log("left:", left, "mid:", mid, "right:", right)

        if(arr[mid] === el) return mid
        else if(arr[mid] > el) right = mid - 1
        else left = mid + 1


        // console.log("left:", left, "mid:", mid, "right:", right)
        // console.log()
    }
    return -1
}


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
    // console.log("i:", i)

    if(arr[i] === el) return i;
    else if(arr[i] < el) return binarySearchR(arr, i+1, right, el);
    else if(arr[i] > el) return binarySearchR(arr, left, i-1, el);
}


/*
 *
 * The lower and upper bound of a binary search
 *
 * eg:
 *   for 1 2 3 4 5 5 5 6 7 9
 *   --------------------------------
 *   in a BS for 3:
 *      v-- lower bound
 *   1 2 3 4 5 5 5 6 7 9
 *        ^-- upper bound
 *   --------------------------------
 *   --------------------------------
 *   in a BS for 5:
 *          v-- lower bound
 *   1 2 3 4 5 5 5 6 7 9
 *                ^-- upper bound
 *   --------------------------------
 *   --------------------------------
 *   in a BS for 8:
 *                    v-- lower bound
 *   1 2 3 4 5 5 5 6 7 9
 *                    ^-- upper bound
 *   --------------------------------
 *
 */


/***
 *
 * binary search bound >=
 *
 * @param arr
 * @param el
 * @returns {number} the index of the first item in the array `>=` el or array.length when el > all
 *
 */
export function binarySearchBoundGe(arr, el) {
    let left = 0, right = arr.length-1, i = arr.length
    while(left <= right) {
        let mid = Math.floor((left + right)/2)

        if(arr[mid] >= el) { i = mid; right = mid - 1}
        else left = mid + 1
    }
    return i
}


/***
 *
 * binary search bound >
 *
 * @param arr
 * @param el
 * @returns {number} the index of the first item in the array `>` el or array.length when el >= all
 *
 */
export function binarySearchBoundGt(arr, el) {
    let left = 0, right = arr.length-1, i = arr.length
    while(left <= right) {
        let mid = Math.floor((left + right)/2)

        if(arr[mid] > el) { i = mid; right = mid - 1}
        else left = mid + 1
    }
    return i
}


/***
 *
 * binary search bound <=
 *
 * @param arr
 * @param el
 * @returns {number} the index of the last item in the array `<=` el or -1 when el < all
 *
 */
export function binarySearchBoundLe(arr, el) {
    let left = 0, right = arr.length-1, i = -1
    while(left <= right) {
        let mid = Math.floor((left + right)/2)

        if(arr[mid] <= el) { i = mid; left = mid + 1}
        else right = mid - 1
    }
    return i
}


/***
 *
 * binary search bound <
 *
 * @param arr
 * @param el
 * @returns {number} the index of the last item in the array `<=` el or -1 when el <= all
 *
 */
export function binarySearchBoundLt(arr, el) {
    let left = 0, right = arr.length-1, i = -1
    while(left <= right) {
        let mid = Math.floor((left + right)/2)

        if(arr[mid] < el) { i = mid; left = mid + 1}
        else right = mid - 1
    }
    return i
}

