function rearrange(arr, n) {
    let i = 0

    while(i <= n / 2 + 3) {
        arr.splice(i, 0, arr[n-1])
        arr.pop()
        i+=2
    }
   
    console.log(arr)
}

function rearrange2(arr, n) {
    let arr2 = [...arr]
    for(let i=0; i<n/2; i++) {
        arr[2*i] = arr2[n-1-i]
        arr[2*i+1] = arr2[i]
    }
    if(n%2) arr.pop()
    console.log(arr)
}

rearrange([1,2,3,4,5,6,7], 7)
