function merge1(arr1, arr2, l1, l2) {
    let i1 = l1 - 1
    let i2 = 0;
    while(i2 < l2 && i1 >= 0) {
        if(arr1[i1] > arr2[i2]) {
            let temp = arr1[i1]
            arr1[i1] = arr2[i2]
            arr2[i2] = temp
            i1--
            i2++
        }
        else {
            i1--
        }
        console.log("arr1: ", arr1)
        console.log("arr2: ", arr2)
    }

    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    console.log("arr1: ", arr1)
    console.log("arr2: ", arr2)
}

function merge2(arr1, arr2, l1, l2) {
    let arrTemp = [...arr1, ...arr2]
    arrTemp.sort((a,b)=>a-b)
    arr1.forEach((el, index, arr1) => 
        arr1[index] = arrTemp[index]
    )
    arr2.forEach((el, index, arr2) => 
        arr2[index] = arrTemp[index + l1]
    )
    
    console.log("arr1: ", arr1)
    console.log("arr2: ", arr2)
    console.log("arrT: ", arrTemp)
    console.log("-------------")
}

merge1(
    [1, 36, 39, 105, 146, 154, 168, 170, 204, 206, 217, 219, 225, 227, 272, 282, 293, 300, 312, 323, 328, 328, 334, 335, 359, 370, 383, 392, 395, 396, 403, 413, 422, 437, 443, 448, 462, 463, 465, 479, 492, 496], 
    [7, 22, 30, 36, 38, 38, 39, 41, 42, 48, 49, 83, 85, 102, 107, 116, 119, 124, 127, 130, 140, 142, 145, 149, 159, 163, 165, 174, 174, 191, 205, 212, 224, 230, 242, 246, 254, 257, 258, 265, 279, 289, 306, 307, 309, 317, 324, 334, 341, 343, 351, 360, 369, 371, 377, 387, 391, 394, 430, 431, 432, 440, 443, 445, 447, 455, 467, 478],
    42, 68
)