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


/***
 *
 * works fine but exceeds time limit
 *
 * O(N^2) time complexity
 * O(1) aux space
 *
 * @param X
 * @param Y
 * @param N X.length
 * @param M Y.length
 * @returns {number}
 */
function countPairs(X, Y, N, M) {
    let [yi, ans] = [0, 0]
    X = X.sort((a, b) => a-b)
    Y = Y.sort((a, b) => a-b)

    // console.log("X: ", X)
    // console.log("Y: ", Y)

    for(let xi=0; xi<N; xi++) {
        if(X[xi] === 2) {
            for(yi=0; Y[yi]<5 && yi < M; yi++) {
                if(Y[yi] !== 2 && Y[yi] !== 3 && Y[yi] !== 4) {
                    // console.log("x:", X[xi], "y:", Y[yi])
                    ans += 1
                }
            }
            // console.log("---M:", M, "yi:", yi)
            ans += (M-yi)
        }
        else if(X[xi] === 3) {
            for(yi=0; Y[yi]<4 && yi < M; yi++) {
                if(Y[yi] !== 3) {
                    // console.log("x:", X[xi], "y:", Y[yi])
                    ans += 1
                }
            }
            // console.log("---M:", M, "yi:", yi)
            ans += (M-yi)
        }
        else if(X[xi] > 2) {
            for(yi=0; Y[yi] < X[xi]+1 && yi < M; yi++) {
                if(Y[yi] === 1) {
                    // console.log("x:", X[xi], "y:", Y[yi])
                    ans += 1
                }
            }
            // console.log("---M:", M, "yi:", yi)
            ans += (M-yi)
        }
    }

    return ans
}

function countPairs2(X, Y, N, M) {
    let [yi, ans] = [0, 0]
    X = X.sort((a, b) => a-b)
    Y = Y.sort((a, b) => a-b)

    console.log("X: ", X)
    console.log("Y: ", Y)

    for(let xi=0; xi<N; xi++) {
        if(X[xi] === 2) {
            for(yi=0; Y[yi]<5 && yi < M; yi++) {
                if(Y[yi] !== 2 && Y[yi] !== 3 && Y[yi] !== 4) {
                    console.log("x:", X[xi], "y:", Y[yi])
                    ans += 1
                }
            }
            console.log("---M:", M, "yi:", yi)
            ans += (M-yi)
        }
        else if(X[xi] === 3) {
            for(yi=0; Y[yi]<4 && yi < M; yi++) {
                if(Y[yi] !== 3) {
                    console.log("x:", X[xi], "y:", Y[yi])
                    ans += 1
                }
            }
            console.log("---M:", M, "yi:", yi)
            ans += (M-yi)
        }
        else if(X[xi] > 3) {
            for(yi=0; Y[yi] < X[xi]+1 && yi < M; yi++) {
                if(Y[yi] === 1) {
                    console.log("x:", X[xi], "y:", Y[yi])
                    ans += 1
                }
            }
            console.log("---M:", M, "yi:", yi)
            ans += (M-yi)
        }
    }

    return ans
}

const pairs = countPairs2(
    [335, 1, 170, 225, 479, 359, 463, 465, 206, 146, 282, 328, 462, 492, 496, 443, 328, 437, 392, 105, 403, 154, 293, 383, 422, 217, 219, 396, 448, 227, 272, 39, 370, 413, 168, 300, 36, 395, 204, 312, 323, 334],
    [174, 165, 142, 212, 254, 369, 48, 145, 163, 258, 38, 360, 224, 242, 30, 279, 317, 36, 191, 343, 289, 107, 41, 443, 265, 149, 447, 306, 391, 230, 371, 351, 7, 102, 394, 49, 130, 124, 85, 455, 257, 341, 467, 377, 432, 309, 445, 440, 127, 324, 38, 39, 119, 83, 430, 42, 334, 116, 140, 159, 205, 431, 478, 307, 174, 387, 22, 246],
    42,68
)

// const pairs = countPairs(
//     [1, 5, 2, 9, 4],
//     [6, 1, 4, 3],
//     5,4
// )

// const pairs = countPairs(
//     [2, 3, 4, 5],
//     [1, 2, 3],
//     4,3
// )

console.log(pairs)