/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 6. Binary Search Algorithm 
    Description: Implement binary search in a sorted array. 
    Example: 
    Input: [1, 3, 5, 7, 9], Target = 7 
    Output: Found at index 3

*/

import { describe, it, expect } from "vitest";
import { findIndexOfTarget } from "../src/question6";

describe("findIndexOfTarget function finds the target elemnt inside an array", () => {
    it("Throws error when the input is not valid", () => {
        const error = `Error: Invalid inputs
        Make sure you have entered an array and a target element`;

        const testCases = [null, undefined, "hello"];

        testCases.forEach(test => {
            expect(() => findIndexOfTarget(test, test)).toThrow(error);
        });
    });
    it("Finds the index of target element", () => {
        expect(findIndexOfTarget([12, 67, 21], 21)).toBe(2);
        expect(findIndexOfTarget([12, 21], 12)).toBe(0);
        expect(findIndexOfTarget([90, 10, 30], 21)).toBe("Not found");
        expect(findIndexOfTarget([30, -30], -30)).toBe(1);
    });
});