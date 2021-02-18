import {describe, expect, test} from "@jest/globals";

import {
    isValidSubsequence,
    isValidSubsequence2
} from "../array/ValidateSubsequence"

describe("Validate subsequence: ", () => {

    test("case 1", () => {
        const array = [5, 1, 22, 25, 6, -1, 8, 10]
        const sequence = [1, 6, -1, 10]
        expect(isValidSubsequence(array, sequence)).toBe(true)
        expect(isValidSubsequence2(array, sequence)).toBe(true)
    })

    test("case 2", () => {
        const array = [5, 1, 22, 25, 6, -1, 8, 10]
        const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 10]
        expect(isValidSubsequence(array, sequence)).toBe(false)
        expect(isValidSubsequence2(array, sequence)).toBe(false)
    })

    test("case 3", () => {
        const array = [5, 1, 22, 25, 6, -1, 8, 10]
        const sequence = [5, 1, 22, 25, 6, -1, 8, 10]
        expect(isValidSubsequence(array, sequence)).toBe(true)
        expect(isValidSubsequence2(array, sequence)).toBe(true)
    })
})




