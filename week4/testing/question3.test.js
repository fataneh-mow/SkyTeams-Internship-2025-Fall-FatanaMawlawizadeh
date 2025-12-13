/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 3. Rotate Array K Times to the Right 
    Description: Rotate elements of an array K times to the right. 
    Example: 
    Input: [1, 2, 3, 4, 5], K = 2 
    Output: [4, 5, 1, 2, 3]

*/

import { describe, it, expect } from "vitest";
import { rotateArrayToRight } from "../src/question3";

describe("rotateArrayToRight rotates an array to the right sode K times", () => {
    it("Throws error when the inputs are not array and number", () => {
        const error = `Error: Invalid input
        Make sure inputs are an array and a number`

        const testCases = [null, undefined, "hello"];
        
        testCases.forEach( test => {
            expect(() => rotateArrayToRight(test, test)).toThrow(error);
        });
    });
    it("Rotates elements of an array K times, even if k times be ngative or decimal", () => {
        expect(rotateArrayToRight([1, 2, 3, 4, 5], -2)).toStrictEqual([4, 5, 1, 2, 3]);
        expect(rotateArrayToRight([1, 2, 3, 4, 5], -2.12)).toStrictEqual([4, 5, 1, 2, 3]);
        expect(rotateArrayToRight([12, 23, 34, 45, 56], -2/1)).toStrictEqual([45, 56, 12, 23, 34]);
        expect(rotateArrayToRight([23, 45, 67, 86, 90], "-4")).toStrictEqual([45, 67, 86, 90, 23]);
    });
});