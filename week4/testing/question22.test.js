/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 22. Merge Overlapping Intervals 
    Input: [[1,3],[2,6],[8,10]] → [[1,6],[8,10]] 

*/

import { describe, it, expect } from "vitest";
import { mergeOverlappingIntervals } from "../src/question22";

describe("mergeOverlappingIntervals function merges overlapping intervals and returns them", () => {
    it("Throws error when input is not array", () => {
        const error = `Error: Invalid input
        Make sure input is an array of intervals`

        const testCases = [null, undefined, "hello", 123]

        testCases.forEach(test => {
            expect(() => mergeOverlappingIntervals(test)).toThrow(error)
        })
    });
    it("Throws error when array is empty", () => {
        const error = "Error: empty array is invalid"

        expect(() => mergeOverlappingIntervals([])).toThrow(error)
    });
    it("Throws error when intervals inside array have a length more that two, since it is not logical to have more than two values", () => {
        const error = "Error: Intervals must have 2 points"

        const testCases = [
            [[1, 2, 3], [2, 3]], 
            [[1], [3, 5, 7]]
        ]

        testCases.forEach(test => {
            expect(() => mergeOverlappingIntervals(test)).toThrow(error)
        })
    });
    it("Merges overlapped intervals and returns the new array of intervals", () => {
        expect(mergeOverlappingIntervals([[1, 3], [2, 6], [8, 10]])).toStrictEqual([[1, 6], [8, 10]])
        expect(mergeOverlappingIntervals([[1, 3], [8, 10]])).toStrictEqual([[1, 3], [8, 10]])
        expect(mergeOverlappingIntervals([[2, 5],[3, 6],[8,10]])).toStrictEqual([[2, 6], [8, 10]])
    });
});