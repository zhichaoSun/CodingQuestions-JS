function binarySearch(arr, left, right, el) {
    if(left > right) return -1;

    let i = Math.floor((right+left)/2);
    console.log("i:", i)

    if(arr[i] == el) return i;
    else if(arr[i] < el) return binarySearch(arr, i+1, right, el);
    else if(arr[i] > el) return binarySearch(arr, left, i-1, el);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
const el = 124
const ans = binarySearch(arr, 0, arr.length, el)

console.log("ans:", ans)
