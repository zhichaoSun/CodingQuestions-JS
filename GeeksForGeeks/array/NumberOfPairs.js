/*
 * Number of pairs
 *
 * Given two arrays X and Y of positive integers,
 * find the number of pairs such that
 *     x^y > y^x
 * where x is an element from X and y is an element from Y.
 *
 * eg:
 *   Input:
 *     M = 3, X[] = [2 1 6]
 *     N = 2, Y[] = [1 5]
 *   Output:
 *     3
 *   Explanation:
 *     [2, 1], [2, 5], [6, 1]
 */


import {
    binarySearchBoundGt
} from "../search&sort/BinarySearch.js"

/***
 *
 * 1. sort array Y
 * 2. count the 1s 2s 3s & 4s in array Y
 * 3.
 *   3.1 when X
 *
 * former algorithm (deleted, can checkout before this commit) failed because
 * failed to take MULTIPLE 2s 3s & 4s into consideration (-=1 or +=1 instead of -=count or +=count)
 *
 * O((N+M)*log(M)) time complexity
 * O(1) aux space
 *
 * @param X arrayX
 * @param Y arrayY
 * @param N length of X
 * @param M length of Y
 * @returns {number} the pairs of numbers
 */
function countPairs3(X, Y, N, M) {
    let yi = 0, ans = 0;
    Y = Y.sort((a, b) => a-b)

    let ones = binarySearchBoundGt(Y, 1)
    let twos = binarySearchBoundGt(Y, 2) - ones
    let threes = binarySearchBoundGt(Y, 3) - ones - twos
    let fours = binarySearchBoundGt(Y, 4) - ones - twos - threes

    for(let xi = 0; xi < N; xi++) {
        ans = ans+ones

        if(X[xi] === 1 ) continue;
        if(X[xi] === 2) { ans-=threes; ans-=fours }
        if(X[xi] === 3) ans+=twos

        yi = binarySearchBoundGt(Y, X[xi])
        ans += (M-yi)

        yi = 0
    }

    return ans
}

const pairs = countPairs3(
    [335, 1, 170, 225, 479, 359, 463, 465, 206, 146, 282, 328, 462, 492, 496, 443, 328, 437, 392, 105, 403, 154, 293, 383, 422, 217, 219, 396, 448, 227, 272, 39, 370, 413, 168, 300, 36, 395, 204, 312, 323, 334],
    [174, 165, 142, 212, 254, 369, 48, 145, 163, 258, 38, 360, 224, 242, 30, 279, 317, 36, 191, 343, 289, 107, 41, 443, 265, 149, 447, 306, 391, 230, 371, 351, 7, 102, 394, 49, 130, 124, 85, 455, 257, 341, 467, 377, 432, 309, 445, 440, 127, 324, 38, 39, 119, 83, 430, 42, 334, 116, 140, 159, 205, 431, 478, 307, 174, 387, 22, 246],
    42,68
)

// const pairs = countPairs3(
//     [1, 5, 2, 9, 4],
//     [6, 1, 4, 1, 3, 1, 2, 2, 4, 4, 4, 3, 3],
//     5,13
// )

console.log(pairs)