/*
 * Class Photo
 *
 * It's photo day at the local school, and you're the photographer assigned to take class photos.
 * The class that you'll be photographing has an even number of students,
 * and all these students are wearing red or blue shirts.
 * In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts.
 * You're responsible for arranging the students in two rows before taking the photo.
 * Each row should contain the same number of the students and should adhere to the following guidelines:
 *
 * - All students wearing red shirts must be in the same row.
 * - All students wearing blue shirts must be in the same row.
 * - Each student in the back row must be strictly taller than the student directly in front of them in the front row.
 *
 * You're given two input arrays: one containing the heights of all the students with red shirts
 * and another one containing the heights of all the students with blue shirts.
 * These arrays will always have the same length, and each height will be a positive integer.
 * Write a function that returns whether or not a class photo that follows the stated guidelines can be taken.
 *
 * eg:
 *   Input:
 *     redShirtHeight = [5, 8, 1, 3, 4]
 *     blueShirtHeight = [6, 9, 2, 4, 5]
 *   Output:
 *     true
 */


/***
 *
 * O(N*log(N)) time complexity
 * O(N) aux space
 *
 * @param redShirtHeights
 * @param blueShirtHeights
 * @returns {boolean}
 *
 */
function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b)
    blueShirtHeights.sort((a, b) => a - b)

    let comp = []
    if(redShirtHeights[0] === blueShirtHeights[0])
        return false
    else
        comp[0] = redShirtHeights[0] > blueShirtHeights[0]

    for (let i = 1; i < redShirtHeights.length; i++) {
        if(redShirtHeights[i] === blueShirtHeights[i]) return false

        if((redShirtHeights[i] > blueShirtHeights[i]) !== comp[i-1]) return false
        else comp.push(redShirtHeights[i] > blueShirtHeights[i])
    }
    return true
}


/***
 *
 * Less aux space solution
 *
 * O(N*log(N))
 * O(1)
 *
 * @param redShirtHeights
 * @param blueShirtHeights
 * @returns {boolean}
 *
 */
function classPhotos2(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b)
    blueShirtHeights.sort((a, b) => a - b)

    if(redShirtHeights[0] === blueShirtHeights[0]) return false

    const backRowColor = redShirtHeights[0] > blueShirtHeights[0] ? "red" : "blue"

    for (let i = 1; i < redShirtHeights.length; i++) {
        const redShirtHeight = redShirtHeights[i]
        const blueShirtHeight = blueShirtHeights[i]

        if(backRowColor === "red") {
            if(redShirtHeight <= blueShirtHeight) return false
        } else {
            if(redShirtHeight >= blueShirtHeight) return false
        }
    }
    return true
}
