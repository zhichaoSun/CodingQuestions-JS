/*
 * Sunset Views
 *
 * Given an array of buildings and a direction that all of the buildings face,
 * return an array of the indices of the buildings that can see the sunset.
 *
 * A building can see the sunset if it's strictly taller than all of the buildings
 * that come after it in the direction that it faces.
 * The input array named buildings contains positive, non-zero integers representing the heights of the buildings.
 * A building at index i thus has a height denoted by buildings[i].
 * All of the buildings face the same direction, and this direction is either east or west,
 * denoted by the input string named direction, which will always be equal to either "EAST" or "WEST".
 * In relation to the input array, you can interpret these directions as right for east and left for west.
 *
 * Important note: the indices in the output array should be sorted in ascending order.
 *
 * eg:
 *   Input:
 *     buildings = [3, 5, 4, 4, 3, 1, 3, 2]
 *     direction = "EAST" / "WEST"
 *   Output
 *     [1, 3, 6, 7] / [0, 1]
 *
 */


/***
 *
 * O(N) time complexity
 * O(N) aux space
 *
 * @param buildings
 * @param direction
 * @returns {*[]}
 */
function sunsetViews(buildings, direction) {
    if(!buildings.length) return []

    let viewStack = [], westernmost = 0, easternmost = buildings.length - 1

    if(direction === "WEST") {
        viewStack[0] = westernmost
        for (let i = westernmost; i <= easternmost; i++) {
            if(buildings[i] > buildings[viewStack[viewStack.length - 1]])
                viewStack.push(i)
        }
    } else if(direction === "EAST") {
        viewStack[0] = easternmost
        for (let i = easternmost; i >= westernmost; i--) {
            if(buildings[i] > buildings[viewStack[0]])
                viewStack.unshift(i)
        }
    }

    return viewStack
}
