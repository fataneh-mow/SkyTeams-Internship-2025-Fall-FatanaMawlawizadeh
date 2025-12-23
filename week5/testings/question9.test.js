/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 20th, 2025 *

    Question 6. Remove Adjacent Duplicates 
    Problem: 
    Given a string s, repeatedly remove adjacent pairs of equal characters. 
    Example: 
    Input: "abbaca" 
    Output: "ca"

*/ 

import { describe, it, expect } from "vitest";
import { removeAdjacentDuplicates } from "../src/question9";


describe("removeAdjacentDuplicates fnction removes all duplicates of a string and returns a new string", () => {
    it("Throws error when input is not string", () => {
        const error = `Error: Invalid Input
        Make sure input is string`

        const testCases = [null, undefined, [], 123]

        testCases.forEach(test => {
            expect(() => removeAdjacentDuplicates(test)).toThrow(error)
        })
    });
    it("Removes duplicates and returns it", () => {
        expect(removeAdjacentDuplicates('1abcccc')).toBe('ba1')
        expect(removeAdjacentDuplicates('abcc')).toBe('ba')
        expect(removeAdjacentDuplicates('123')).toBe('321')
        expect(removeAdjacentDuplicates('000')).toBe('0')
        expect(removeAdjacentDuplicates('$$$')).toBe('$')
    });
});