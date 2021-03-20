/*
 * Group Anagrams
 *
 * Write a function that takes in an array of strings and groups anagrams together.
 * Anagrams are strings made up of exactly the same letters, where order doesn't matter.
 * For example, cinema and iceman are anagrams, similarly, foo and ofo are anagrams.
 *
 * Your function should return a list of anagram groups in no particular order.
 *
 * eg:
 *   Input:
 *     words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
 *   Output:
 *     [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
 */


/***
 *
 * A not so good solution, compare whether current word is anagram with what are hold in the ans[]
 *
 * O(W*W*N*log(N)) time complexity, where W is the length of the input words array and N is the length of the longest word in words
 * O(W*N) aux space
 *
 * @param {[]} words
 * @returns {*[]|[[*]]}
 */
function groupAnagrams(words) {
    if(words.length === 0) return []

    let ans = [[words[0]]], flag = false

    for (let i = 1; i < words.length; i++) { // W
        console.log(ans)
        const currW = words[i]

        for(const el of ans) { // W
            if(isAnagrams(el[0], currW)) { // N*log(N)
                el.push(currW)
                flag = false
                break
            }
            else flag = true
        }

        if(flag) {
            ans.push([currW])
            flag = false
        }
    }

    return ans
}

function isAnagrams(word1, word2) {
    const arr1 = word1.split("").sort()
    const arr2 = word2.split("").sort()

    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false
    }

    return true
}


/***
 *
 * A much better solution
 *
 * O(W*N*log(N)) time complexity, where W is the length of the input words array and N is the length of the longest word in words
 * O(W*N) aux space
 *
 * @param {[]}words
 * @returns {*[]|[[*]]}
 */
function groupAnagrams2(words) {
    let ans = {}

    for (const word of words) { // W
        const aStr = word.split("").sort().join() // N*log(N)

        if(aStr in ans) ans[aStr].push(word)
        else ans[aStr] = [word]
    }

    return Object.values(ans)
}
