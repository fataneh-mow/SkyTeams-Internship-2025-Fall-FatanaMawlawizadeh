/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 5.Rearrange Array (Even Before Odd) 
    Description: Move even numbers before odd numbers while maintaining order. 
    Example: 
    Input: [1, 2, 3, 4, 5, 6] 
    Output: [2, 4, 6, 1, 3, 5]

*/

import { describe, it, expect } from "vitest";
import { reArrangeArrays } from "../src/question5";

describe("reArrangeArrays function arranges number from even to odd in ascending order", () => {
    it("Throws error when the input are not array", () => {
        const error = `Error: Invalid Input
        Make sure input is two arrays`;

        const testCases = [null, 123, "Hello", undefined];

        testCases.forEach(test => {
            expect(() => reArrangeArrays(test, test)).toThrow(error);
        });
    });
    it("rearranges arrays in even to odd order", () => {
        expect(reArrangeArrays([1, 34, 56], [12, 65, 43])).toStrictEqual([12, 34, 56, 1, 43, 65]);
        expect(reArrangeArrays([1, 3, 6], [2, 5, 4])).toStrictEqual([2, 4, 6, 1, 3, 5]);
        expect(reArrangeArrays([1, 36, 58], [12, 65, 93])).toStrictEqual([12, 36, 58, 1, 65, 93]);
    });
});