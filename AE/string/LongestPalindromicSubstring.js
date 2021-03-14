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
 *
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


/***
 *
 * A faster solution
 *
 * O(N^2) time space
 * O(N) aux space
 *
 * @param string
 * @returns {*}
 */
function longestPalindromicSubstring2(string) {
    let gl = [0, 1]

    for (let i = 1; i < string.length; i++) {
        const odd = getLongestPIndex(string, i - 1, i + 1)
        const even = getLongestPIndex(string, i, i + 1)
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even

        if(longest[1] - longest[0] > gl[1] - gl[0]) gl = longest
    }

    return string.slice(gl[0], gl[1])
}

function getLongestPIndex(string, left, right) {
    while(left >= 0 && right <= string.length - 1) {
        if(string[left] !== string[right]) break
        left--
        right++
    }
    return [left + 1, right]
}


