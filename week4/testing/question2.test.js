/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 2. Merge Two Sorted Arrays 
    Description: Merge two sorted arrays into a single sorted array. 
    Example: 
    Input: [1, 3, 5], [2, 4, 6] 
    Output: [1, 2, 3, 4, 5, 6]

*/

import { describe, it, expect } from "vitest";
import { concatingSortedArrays } from "../src/question2";

describe("sortedArrays function sorts numbers inside two arrays", () => {
    it("Throws error when the input is not array", () => {
        const error = `Error: Invalid input
        Make sure input is array`;

        const testCases = [null, undefined, "hello"]

        testCases.forEach(test => {
            expect(() => concatingSortedArrays(test, test)).toThrow(error)
        });
    });
    it("Sorts and then merges two arrays together", () => {
        expect(concatingSortedArrays([12, 13, 15], [35, 24, 18])).toStrictEqual([12, 13, 15, 18, 24, 35])
        expect(concatingSortedArrays([10, 0,  3, 2], [])).toStrictEqual([0, 2, 3, 10])
        expect(concatingSortedArrays([1, 5, 4, 3, 2], [8, 9, 7, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(concatingSortedArrays([100, 200], [34, 37])).toStrictEqual([34, 37, 100, 200])
    });
});