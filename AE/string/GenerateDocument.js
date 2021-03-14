/*
 * Generate Document
 *
 * You're given a string of available characters and a string representing a document that you need to generate.
 * Write a function that determines if you can generate the document using the available characters.
 * If you can generate the document, your function should return true; otherwise, it should return false.
 *
 * You're only able to generate the document if the frequency of unique characters in the characters string
 * is greater than or equal to the frequency of unique characters in the document string.
 * For example, if you're given characters = "abcabc" and document = "aabbccc",
 * you cannot generate the document because you're missing one c.
 *
 * The document that you need to create may contain any characters,
 * including special characters, capital letters, numbers, and spaces.
 *
 * Note: you can always generate the empty string ("").
 *
 * eg:
 *   Input:
 *     characters = "Bste!hetsi ogEAxpelrt x "
 *     document = "AlgoExpert is the Best!"
 *   Output:
 *     true
 */


/**
 * Store the count of unique characters of the characters string in an object
 *
 * O(M+N) time complexity
 * O(C) aux space, where C is the unique characters of the characters string
 *
 * @param {string} characters
 * @param {string} document
 * @returns {boolean}
 */
function generateDocument(characters, document) {
    const cMap = {}
    for (let i = 0; i < characters.length; i++) {
        if(characters[i] in cMap) cMap[characters[i]] += 1
        else cMap[characters[i]] = 1
    }

    for (let i = 0; i < document.length; i++) {
        if(!(document[i] in cMap)) return false
        else {
            if(cMap[document[i]] > 1) cMap[document[i]] -= 1
            else if(cMap[document[i]] === 1) delete cMap[document[i]]
        }
    }

    return true
}

function generateDocument2(characters, document) {
    let cMap = {}

    for (const character of characters) {
        if(!(character in cMap)) cMap[character] = 0
        cMap[character]++
    }

    for (const documentElement of document) {
        if(!(documentElement in cMap) || cMap[documentElement] === 0) return false
        cMap[documentElement]--
    }

    return true
}