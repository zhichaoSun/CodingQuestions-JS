
import {expect, test} from "@jest/globals";

import {
    binarySearch,
    binarySearchR,
    binarySearchBoundGe,
    binarySearchBoundGt,
    binarySearchBoundLe,
    binarySearchBoundLt

} from "../BinarySearch"

test("binary search", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20]
    const n = array.length
    for(let i = 1; i<=21; i++) {
        expect(binarySearch(array, i)).toBe(binarySearchR(array, 0, n-1, i))
    }
})

test("binary search bound >=", () => {
    const array = [0,1,1,1,2]
    expect(binarySearchBoundGe(array, -1)).toBe(0)
    expect(binarySearchBoundGe(array, 0)).toBe(0)
    expect(binarySearchBoundGe(array, 0.5)).toBe(1)
    expect(binarySearchBoundGe(array, 1)).toBe(1)
    expect(binarySearchBoundGe(array, 1.5)).toBe(4)
    expect(binarySearchBoundGe(array, 2)).toBe(4)
    expect(binarySearchBoundGe(array, 3)).toBe(5)
})

test("binary search bound >", () => {
    const array = [0,1,1,1,2]
    expect(binarySearchBoundGt(array, -1)).toBe(0)
    expect(binarySearchBoundGt(array, 0)).toBe(1)
    expect(binarySearchBoundGt(array, 0.5)).toBe(1)
    expect(binarySearchBoundGt(array, 1)).toBe(4)
    expect(binarySearchBoundGt(array, 1.5)).toBe(4)
    expect(binarySearchBoundGt(array, 2)).toBe(5)
    expect(binarySearchBoundGt(array, 3)).toBe(5)
})

test("binary search bound <=", () => {
    const array = [0,1,1,1,2]
    expect(binarySearchBoundLe(array, -1)).toBe(-1)
    expect(binarySearchBoundLe(array, 0)).toBe(0)
    expect(binarySearchBoundLe(array, 0.5)).toBe(0)
    expect(binarySearchBoundLe(array, 1)).toBe(3)
    expect(binarySearchBoundLe(array, 1.5)).toBe(3)
    expect(binarySearchBoundLe(array, 2)).toBe(4)
    expect(binarySearchBoundLe(array, 3)).toBe(4)
})

test("binary search bound <", () => {
    const array = [0,1,1,1,2]
    expect(binarySearchBoundLt(array, -1)).toBe(-1)
    expect(binarySearchBoundLt(array, 0)).toBe(-1)
    expect(binarySearchBoundLt(array, 0.5)).toBe(0)
    expect(binarySearchBoundLt(array, 1)).toBe(0)
    expect(binarySearchBoundLt(array, 1.5)).toBe(3)
    expect(binarySearchBoundLt(array, 2)).toBe(3)
    expect(binarySearchBoundLt(array, 3)).toBe(4)
})