import {describe, expect, test} from "@jest/globals";

/****************
 Array
 ****************/


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


import { findThreeLargestNumbers } from "../search/LargestThreeNumber"
describe("Find the largest three numbers:", () => {
    test("cast 1: ", () => {
        const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
        expect((findThreeLargestNumbers(array))).toEqual([18, 141, 541])
    })

    test("cast 2: ", () => {
        const array = [55, 7, 8]
        expect((findThreeLargestNumbers(array))).toEqual([7, 8, 55])
    })

    test("cast 3: ", () => {
        const array = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
        expect((findThreeLargestNumbers(array))).toEqual([7, 7, 7])
    })

    test("cast 4: ", () => {
        const array = [7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7]
        expect((findThreeLargestNumbers(array))).toEqual([7, 7, 8])
    })
})


/****************
 Linked list
 ****************/


/****************
 Recursion
 ****************/


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


import { productSum } from "../recursion/ProductSum"
describe("Product Sum:", () => {
    test("cast 1:", () => {
        expect(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toBe(12)
    })

    test("cast 2:", () => {
        expect(productSum([1, 2, 3, 4, 5])).toBe(15)
    })

    test("cast 3:", () => {
        expect(productSum([[[[[5]]]]])).toBe(600)
    })

    test("cast 4:", () => {
        expect(productSum([1, 2, [3], 4, 5])).toBe(18)
    })

    test("cast 5:", () => {
        expect(productSum([9, [2, -3, 4], 1, [1, 1, [1, 1, 1]], [[[[3, 4, 1]]], 8],
            [1, 2, 3, 4, 5, [6, 7], -7], [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
            [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]], -3
        ])).toBe(1351)
    })
})


/****************
 Search
 ****************/

/****************
 Sort
 ****************/


import { bubbleSort, bubbleSort2 } from "../sort/BubbleSort"
describe("Bubble sort: ", () => {
    test("case 1", () => {
        const sortedArray = [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]

        const array1 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        bubbleSort(array1)
        const array2 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        bubbleSort2(array2)

        expect(array1).toEqual(sortedArray)
        expect(array2).toEqual(sortedArray)
    })

    test("case 2", () => {
        const sortedArray = [1]

        const array1 = [1]
        bubbleSort(array1)
        const array2 = [1]
        bubbleSort2(array2)

        expect(array1).toEqual(sortedArray)
        expect(array2).toEqual(sortedArray)
    })

    test("case 3", () => {
        const sortedArray = []

        const array1 = []
        bubbleSort(array1)
        const array2 = []
        bubbleSort2(array2)

        expect(array1).toEqual(sortedArray)
        expect(array2).toEqual(sortedArray)
    })
})


import { insertionSort } from "../sort/InsertionSort"
describe("Insertion sort: ", () => {
    test("case 1", () => {
        const sortedArray = [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]
        const array1 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        insertionSort(array1)
        expect(array1).toEqual(sortedArray)
    })

    test("case 2", () => {
        const sortedArray = [1]
        const array1 = [1]
        insertionSort(array1)
        expect(array1).toEqual(sortedArray)
    })

    test("case 3", () => {
        const sortedArray = []
        const array1 = []
        insertionSort(array1)
        expect(array1).toEqual(sortedArray)
    })
})


import { selectionSort } from "../sort/SelectionSort"
describe("Selection sort: ", () => {
    test("case 1", () => {
        const sortedArray = [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]
        const array = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        selectionSort(array)
        expect(array).toEqual(sortedArray)
    })

    test("case 2", () => {
        const array = [1]
        selectionSort(array)
        expect(array).toEqual([1])
    })

    test("case 3", () => {
        const array = []
        selectionSort(array)
        expect(array).toEqual([])
    })
})


import { threeNumberSort, threeNumberSort2 } from "../sort/ThreeNumberSort"
describe("Three number order sort:", () => {
    test("cast 1: three numbers", () => {
        const order = [0, 1, -1]

        const array1 = [1, 0, 0, -1, -1, 0, 1, 1]
        threeNumberSort(array1, order)
        expect(array1).toEqual([0, 0, 0, 1, 1, 1, -1, -1])

        const array2 = [1, 0, 0, -1, -1, 0, 1, 1]
        threeNumberSort2(array2, order)
        expect(array2).toEqual([0, 0, 0, 1, 1, 1, -1, -1])
    })

    test("cast 2: empty array", () => {
        const order = [0, 1, -1]

        const array1 = []
        threeNumberSort(array1, order)
        expect(array1).toEqual([])

        const array2 = []
        threeNumberSort2(array2, order)
        expect(array2).toEqual([])
    })

    test("cast 3: less than three numbers", () => {
        const order = [0, 1, -1]

        const array1 = [-1, -1, -1, 0, 0, 0]
        threeNumberSort(array1, order)
        expect(array1).toEqual([0, 0, 0, -1, -1, -1])

        const array2 = [-1, -1, -1, 0, 0, 0]
        threeNumberSort2(array2, order)
        expect(array2).toEqual([0, 0, 0, -1, -1, -1])
    })
})


/****************
 String
 ****************/


import { isPalindrome } from "../string/Palindrome"
describe("Check is a string is a palindrome:", () => {
    test("cast 1: a palindrome", () => {
        expect(isPalindrome("abcdcba")).toBe(true)
    })

    test("cast 2: a non-palindrome", () => {
        expect(isPalindrome("abcdefghhgfedca")).toBe(false)
    })

    test("cast 3: a single-character palindrome", () => {
        expect(isPalindrome("a")).toBe(true)
    })
})


import { caesarCipherEncryptor } from "../string/CaesarCiperEncryptor"
describe("A caesar cipher encryptor:", () => {
    test("cast 1: key is <26", () => {
        expect(caesarCipherEncryptor("iwufqnkqkqoolxz", 25)).toBe("hvtepmjpjpnnkwy")
    })

    test("cast 2: key is >26", () => {
        expect(caesarCipherEncryptor("iwufqnkqkqoolxz", 27)).toBe("jxvgrolrlrppmya")
    })

    test("cast 3: key is a multiple of 26", () => {
        expect(caesarCipherEncryptor("iwufqnkqkqoolxz", 52)).toBe("iwufqnkqkqoolxz")
    })
})


import { runLengthEncoding, runLengthEncoding2, runLengthEncoding3 } from "../string/RunLengthEncoding"
describe("Run-length encoder:", () => {
    test("cast 1: ", () => {
        expect(runLengthEncoding("AAAAAAAAAAAAABCCCCDD")).toBe("9A4A1B4C2D")
        expect(runLengthEncoding2("AAAAAAAAAAAAABCCCCDD")).toBe("9A4A1B4C2D")
        expect(runLengthEncoding3("AAAAAAAAAAAAABCCCCDD")).toBe("9A4A1B4C2D")
    })

    test("cast 2: ", () => {
        expect(runLengthEncoding("aA")).toBe("1a1A")
        expect(runLengthEncoding2("aA")).toBe("1a1A")
        expect(runLengthEncoding3("aA")).toBe("1a1A")
    })

    test("cast 3: ", () => {
        expect(runLengthEncoding("122333")).toBe("112233")
        expect(runLengthEncoding2("122333")).toBe("112233")
        expect(runLengthEncoding3("122333")).toBe("112233")
    })

    test("cast 4: ", () => {
        expect(
            runLengthEncoding(";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s")
        ).toBe("9;3;9'9'2'111273524142311s")
        expect(
            runLengthEncoding2(";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s")
        ).toBe("9;3;9'9'2'111273524142311s")
        expect(
            runLengthEncoding3(";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s")
        ).toBe("9;3;9'9'2'111273524142311s")
    })

    test("cast 5: ", () => {
        expect(
            runLengthEncoding("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA")
        ).toBe("9*3*7^6$7%6!9A9A2A")
        expect(
            runLengthEncoding2("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA")
        ).toBe("9*3*7^6$7%6!9A9A2A")
        expect(
            runLengthEncoding3("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA")
        ).toBe("9*3*7^6$7%6!9A9A2A")
    })

    test("cast 6: ", () => {
        expect(
            runLengthEncoding("                          ")
        ).toBe("9 9 8 ")
        expect(
            runLengthEncoding2("                          ")
        ).toBe("9 9 8 ")
        expect(
            runLengthEncoding3("                          ")
        ).toBe("9 9 8 ")
    })
})










