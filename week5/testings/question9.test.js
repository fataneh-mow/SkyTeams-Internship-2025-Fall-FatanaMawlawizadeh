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
    it("Throws error when input is not string")
    it("Removes duplicates and returns it", () => {
        expect(removeAdjacentDuplicates('1abcccc')).toBe('1abc')
        expect(removeAdjacentDuplicates('abcc')).toBe('abc')
        expect(removeAdjacentDuplicates('12333')).toBe('123')
        expect(removeAdjacentDuplicates('000')).toBe('0')
        expect(removeAdjacentDuplicates('$$$')).toBe('$')
    });
});