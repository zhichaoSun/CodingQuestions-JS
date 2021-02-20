/*
 * Palindrome Check
 *
 * A palindrome is defined as a string that is written the same forward and backward.
 * Single-character strings are palindromes too.
 *
 */


/***
 *
 * O(N) time complexity
 * O(1) aux space
 *
 * @param string
 * @returns {boolean}
 *
 */
export function isPalindrome(string) {
    let left = 0, right = string.length - 1
    while(right - left >= 1) {
        if(string[left] !== string[right]) return false
        left++
        right--
    }
    return true
}