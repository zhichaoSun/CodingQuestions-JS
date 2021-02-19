import {describe, expect, test} from "@jest/globals";


import { isValidSubsequence, isValidSubsequence2 } from "../array/ValidateSubsequence"
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


import { getNthFib, getNthFib2 } from "../recursion/NthFibonacci";
describe("Nth Fibonacci Number: ", () => {

    test("case 1", () => {
        const n = 0
        expect(getNthFib(n)).toBe(0)
        expect(getNthFib2(n)).toBe(0)
    })

    test("case 2", () => {
        const n = 1
        expect(getNthFib(n)).toBe(0)
        expect(getNthFib2(n)).toBe(0)
    })

    test("case 3", () => {
        const n = 2
        expect(getNthFib(n)).toBe(1)
        expect(getNthFib2(n)).toBe(1)
    })

    test("case 4", () => {
        const n = 17
        expect(getNthFib(n)).toBe(987)
        expect(getNthFib2(n)).toBe(987)
    })
})


import { bubbleSort, bubbleSort2 } from "../sort/BubbleSort"
describe("Bubble sort: ", () => {
    test("case 1", () => {
        const sortedArray = [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]

        const array1 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        const array2 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        bubbleSort(array1)
        bubbleSort2(array2)
        expect(JSON.stringify(array1) === JSON.stringify(sortedArray)).toBe(true)
        expect(JSON.stringify(array2) === JSON.stringify(sortedArray)).toBe(true)
    })

    test("case 2", () => {
        const sortedArray = [1]

        const array1 = [1]
        const array2 = [1]
        bubbleSort(array1)
        bubbleSort2(array2)
        expect(JSON.stringify(array1) === JSON.stringify(sortedArray)).toBe(true)
        expect(JSON.stringify(array2) === JSON.stringify(sortedArray)).toBe(true)
    })

    test("case 3", () => {
        const sortedArray = []

        const array1 = []
        const array2 = []
        bubbleSort(array1)
        bubbleSort2(array2)
        expect(JSON.stringify(array1) === JSON.stringify(sortedArray)).toBe(true)
        expect(JSON.stringify(array2) === JSON.stringify(sortedArray)).toBe(true)
    })
})

