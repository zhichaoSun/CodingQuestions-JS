/*
 * Longest Palindromic Substring
 *
 * Write a function that, given a string, returns its longest palindromic substring.
 *
 * A palindrome is defined as a string that's written the same forward and backward.
 * Note that single-character strings are palindromes.
 *
 * You can assume that there will only be one longest palindromic substring.
 *
 * eg:
 *   Input:
 *     string = "abaxyzzyxf"
 *   Output:
 *     "xyzzyx"
 */


/***
 * O(N^3) time complexity
 * O(N) aux space
 * @param string
 * @returns {string}
 */
function longestPalindromicSubstring(string) {
    let gl = ""

    for (let i = 0; i < string.length; i++) {
        let ll = "", sutStr = ""
        for (let j = i; j < string.length; j++) {
            sutStr = string.slice(i, j+1)
            const reversedSubStr = reverse(sutStr)
            if(sutStr === reversedSubStr) ll = reversedSubStr
            if(ll.length > gl.length) gl = ll
        }
    }

    return gl
}

function reverse(string) {
    let newString = ""
    for (let i = string.length - 1; i >= 0 ; i--) {
        newString += string[i]
    }
    return newString
}