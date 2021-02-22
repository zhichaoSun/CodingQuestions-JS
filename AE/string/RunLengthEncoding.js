/*
 *
 * Run-Length Encoding
 *
 * From Wikipedia:
 *   "run-length encoding is a form of lossless data compression in which
 *   runs of data are stored as a single data value and count,
 *   rather than as the original run."
 *
 * For this problem, a run of data is any sequence of consecutive, identical characters.
 * So the run "AAA" would be run-length-encoded as "3A".
 *
 * To make things more complicated, however, the input string can contain
 * all sorts of special characters, including numbers.
 * And since encoded data must be decodable,
 * this means that we can't naively run-length-encode long runs.
 * For example, the run "AAAAAAAAAAAA", can't natively be encoded as "12A",
 * since thus string can be decoded as either "AAAAAAAAAAAA" or "1AA".
 * Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion;
 * the aforementioned run should be encoded as "9A3A"
 *
 * eg:
 *   Input:
 *     "AAAAAAAAAAAAABCCCCDD"
 *   Output:
 *     "9A4A1B4C2D"
 *
 */


/***
 *
 * Traverse through the string first, count the count of each character's occurrence,
 * then transfer this counts into the encoded string
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param string
 * @returns {string} encoded string
 *
 */
export function runLengthEncoding(string) {
    let counts = [], count = 1, index = -1, cipher = ""

    // count the occurrence of each char, store these counts in counts array
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i-1]) {
            count++
            counts[index] = count
        }
        else {
            count = 1
            index++
            counts[index] = count
        }
    }

    // traverse the counts array, create a new string cipher
    // when count > 0, divide by 9 to get its quotient and remainder
    for(let i = 0; i < counts.length; i++) {
        const si = counts.slice(0, i).reduce((a, b) => a+b, 0)
        if(count[i] <= 9) {
            cipher += `${count[i]}${string[si]}`
        } else {
            let c = Math.floor(counts[i]/9)
            const m = counts[i]%9
            while(c--) {
                cipher += `9${string[si]}`
            }
            if(m!==0)
                cipher += `${m}${string[si]}`
        }
    }

    return cipher
}


/***
 *
 * Another solution, more readable
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param string
 * @returns {string} encoded string
 *
 */
export function runLengthEncoding2(string) {
    let cipher = [], ci = 0, count = 1

    for(let i = 0; i < string.length; i++) {

        if(string[i] === string[i-1] && count <= 9) {
            cipher[ci] = count
            cipher[ci+1] = string[i]
        }
        // when current char !== previous char, start another round of calculation
        else {
            count = 1
            if(i!==0) ci+=2
            cipher[ci] = count
            cipher[ci+1] = string[i]
        }
        count++
    }

    return cipher.join("")
}


/***
 *
 * A more elegant solution, concept is the same as solution2
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param string
 * @returns {string} encoded string
 *
 */
export function runLengthEncoding3(string) {
    let cipher = [], count = 1

    for(let i = 1; i < string.length; i++) {
        let prevChar = string[i-1]
        let currChar = string[i]
        if(prevChar !== currChar || count === 9) {
            cipher.push(count)
            cipher.push(prevChar)
            count = 0
        }
        count++
    }
    cipher.push(count)
    cipher.push(string[string.length - 1])

    return cipher.join("")
}