/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 16. Matrix Multiplication 
    Description: Multiply matrix A × B manually. 
    Example: 
    [[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]]

*/

import { describe, it, expect, test } from "vitest";
import { matrixMultiplication } from "../src/question16";

describe("matrixMultiplication function multiplies two 2-2 dimenstional matrixes", () => {
    it("Throws error when two matrixes are not array type", () => {
        const error = `Invalid inputs
        Make sure your inputs are matrixes written in array format`

        const testCases = [null, undefined, "hello", 123]

        testCases.forEach(test => {
            expect(() => matrixMultiplication(test, test)).toThrow(error)
        })
    });
    it("Throws error when two matrixes have different lengths", () => {
        const error = `Matrixes must be equal in dimension to multiply`

        let mat1 = [
            [1, 2, 3], 
            [0, 1]
        ]

        let mat2 = [
            [1], 
            [3, 2]
        ]

        expect(() => matrixMultiplication(mat1, mat2)).toThrow(error)
    });
    it("Multiplies two matrixes together and returns the result", () => {
        let mat1 = [
            [1, 2], 
            [2, 1]
        ]

        let mat2 = [
            [0, 1], 
            [2, 3]
        ]

        let result = [
            [4, 7],
            [2, 5]
        ]
        expect(matrixMultiplication(mat1, mat2)).toStrictEqual(result)

        let mat3 = [
            [2, 1],
            [0, 3]
        ]

        let mat4 = [
            [4, 2],
            [1, 5]
        ]

        let result2 = [
            [9, 9],
            [3, 15]
        ]
        expect(matrixMultiplication(mat3, mat4)).toStrictEqual(result2)
    })
});