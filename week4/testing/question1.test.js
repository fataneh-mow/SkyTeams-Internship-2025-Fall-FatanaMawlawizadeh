/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 1. Find Second Largest Number in an Array 
    Description: Find the second largest number without sorting the array. 
    Example: 
    Input: [10, 20, 4, 45, 99] 
    Output: 45

*/

import { describe, it, expect } from "vitest";
import { secondLargest } from "../src/question1";

describe("secondLargest finds the second largest from an array", () => {
    it("Throws error when the input is not array", () => {
        const error = `Error: Invalid input
        Make sure you enter an array as input`

        const testCases = [null, undefined, "hello", 12];

        testCases.forEach(test => {
            expect(() => secondLargest(test)).toThrow(error);
        });
    });
    it("Finds the second greatest number among different lists of numbers", () => {
        expect(secondLargest([12, 45, 32, 10])).toBe(32);
        expect(secondLargest([12, -45, -32, 10])).toBe(32);
        expect(secondLargest([8/4, 12, 5.19])).toBe(5);
        expect(secondLargest(["33", 98])).toBe(33);
    });
});