/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 12th, 2025

    Question 25. Set Matrix Zeroes
    If an element is zero, set its entire row and column to zero.
    Follow-up: solve in constant extra space using the matrix itself as markers

*/

import { describe, it, expect } from "vitest";
import { setMatrixeZeros } from "../src/question25";

describe("setMatrixZeros sets all the values inside a matrix to zero, works wih every matrix having any dimension", () => {
    it("Throws error when matrix is not array of arrays", () => {
        const error = `Error: Invalid Input
        Make sure input is an array of matrixes`

        const testCases = [null, undefined, 123, 'hello']

        testCases.forEach(test => {
            expect(() => setMatrixeZeros(test)).toThrow(error)
        })
    });
    it("it sets all the values in a matrix to zero", () => {
        let mat1 = [
            [1, 2],
            [2, 3, 4]
        ]
        expect(setMatrixeZeros(mat1)).toStrictEqual([[0, 0], [0, 0, 0]])

        let mat2 = [
            [1],
            [4, 5],
            [2, 3]
        ]
        expect(setMatrixeZeros(mat2)).toStrictEqual([[0], [0, 0], [0, 0]])

        let mat3 = [
            [1, 12, 13, 14],
            [4],
            [3]
        ]
        expect(setMatrixeZeros(mat3)).toStrictEqual([[0, 0, 0, 0], [0], [0]])
    });
});