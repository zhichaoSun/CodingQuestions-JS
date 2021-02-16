
import {expect, test} from "@jest/globals";

import {
    binarySearch
} from "./BinarySearch"

test("find 1 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
    const n = array.length
    const el = 1
    expect(binarySearch(array, n, el)).toBe(0)
})
test("find 3 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
    const n = array.length
    const el = 3
    expect(binarySearch(array, n, el)).toBe(2)
})
test("find 1252 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
    const n = array.length
    const el = 1252
    expect(binarySearch(array, n, el)).toBe(13)
})
test("find 3 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 124, 155, 1252]
    const n = array.length
    const el = 11
    expect(binarySearch(array, n, el)).toBe(-1)
})