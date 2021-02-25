/*
 * Non-Constructible Change
 *
 * Given an array of positive integers representing the values of coins in your possession,
 * write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
 * The given coins can have any positive integer value and aren't necessarily unique (i.e.,
 * you can have multiple coins of the same value).
 *
 * eg:
 *   Input:
 *     coins = [1, 2, 5]
 *   Output:
 *     4
 */

/***
 *
 * Consider the array: arr = [1, 2, 4, 8, 16, 32, 64], this can create any integer < 128
 * but if any arr[i] > 2*arr[i-1]+1 (i >= 1), by no means it can make it.
 *
 * @param coins
 * @returns {number} the minimum change that one cannot make
 *
 */
function nonConstructibleChange(coins) {
    if(!coins.length) return 1
    coins.sort((a, b) => a - b)

    let changes = 0
    for (let i = 0; i < coins.length; i++) {
        if(coins[i] > changes + 1) return changes + 1
        else changes += coins[i]
    }

    return ++changes
}

const coins = [1, 1, 2, 3, 5, 7, 22]
console.log(nonConstructibleChange(coins))

