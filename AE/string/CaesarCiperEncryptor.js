/*
 *
 * Caesar Cipher Encryptor
 *
 * Given a non-empty string of lowercase letters and a non-negative integer representing a key,
 * write a function that return a new string obtained by shifting every letter in the input string
 * by k position in the alphabet, where k is the key
 *
 * Note that letters should "wrap" around the alphabet:
 *   the letter "z" shifted by one returns the letter "a"
 *
 */


/**
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param string
 * @param key
 * @returns encrypted(shifted) string
 *
 */
export function caesarCipherEncryptor(string, key) {
    let newString = [], offset = key % 26

    if(offset === 0) return string

    for(let i = 0; i < string.length; i++) {
        let ascii = string[i].codePointAt(0)
        if(ascii > 122-offset) ascii-=26
        newString[i] = String.fromCharCode((ascii+offset))
    }

    return newString.join("")
}
