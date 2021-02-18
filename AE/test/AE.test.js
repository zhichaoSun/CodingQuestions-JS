import {expect, test} from "@jest/globals";

import {
    isValidSubsequence
} from "../array/ValidateSubsequence"

test("Case 1", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [1, 6, -1, 10]
    expect(isValidSubsequence(array, sequence)).toBe(true)
})

test("Case 2", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 10]
    expect(isValidSubsequence(array, sequence)).toBe(false)
})

test("Case 3", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [5, 1, 22, 25, 6, -1, 8, 10]
    expect(isValidSubsequence(array, sequence)).toBe(true)
})