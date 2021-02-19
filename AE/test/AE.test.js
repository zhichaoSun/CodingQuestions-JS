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


import { insertionSort } from "../sort/InsertionSort"
describe("Insertion sort: ", () => {
    test("case 1", () => {
        const sortedArray = [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]

        const array1 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        insertionSort(array1)
        expect(JSON.stringify(array1) === JSON.stringify(sortedArray)).toBe(true)
    })

    test("case 2", () => {
        const sortedArray = [1]

        const array1 = [1]
        insertionSort(array1)
        expect(JSON.stringify(array1) === JSON.stringify(sortedArray)).toBe(true)
    })

    test("case 3", () => {
        const sortedArray = []

        const array1 = []
        insertionSort(array1)
        expect(JSON.stringify(array1) === JSON.stringify(sortedArray)).toBe(true)
    })
})


import { selectionSort } from "../sort/SelectionSort"
describe("Selection sort: ", () => {
    test("case 1", () => {
        const array1 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        selectionSort(array1)
        expect(JSON.stringify(array1) ===
            JSON.stringify([-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10])
        ).toBe(true)
    })

    test("case 2", () => {
        const array1 = [1]
        selectionSort(array1)
        expect(JSON.stringify(array1) === JSON.stringify([1])).toBe(true)
    })

    test("case 3", () => {
        const array1 = []
        selectionSort(array1)
        expect(JSON.stringify(array1) === JSON.stringify([])).toBe(true)
    })
})


import { threeNumberSort } from "../sort/ThreeNumberSort"
describe("Three number order sort:", () => {
    test("cast 1: three numbers", () => {
        const array = [1, 0, 0, -1, -1, 0, 1, 1]
        const order = [0, 1, -1]
        threeNumberSort(array, order)
        expect(JSON.stringify(array) ===
            JSON.stringify([0, 0, 0, 1, 1, 1, -1, -1])
        ).toBe(true)
    })

    test("cast 2: empty array", () => {
        const array = []
        const order = [0, 1, -1]
        threeNumberSort(array, order)
        expect(JSON.stringify(array) ===
            JSON.stringify([])
        ).toBe(true)
    })

    test("cast 3: less than three numbers", () => {
        const array = [-1, -1, -1, 0, 0, 0]
        const order = [0, 1, -1]
        threeNumberSort(array, order)
        expect(JSON.stringify(array) ===
            JSON.stringify([0, 0, 0, -1, -1, -1])
        ).toBe(true)
    })

})
