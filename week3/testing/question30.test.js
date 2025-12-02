/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 29th, 2025 *

    Question 30. Find Missing Number in Array (1 to N) 
    Description: Given numbers from 1 to N with one missing, find the missing number. 
    Example: 
    Input: 
    [1, 2, 4, 5] 
    Output: 
    3

*/

import { describe, it, expect } from "vitest";
import { missingNumber } from "../src/question30";

describe("missingNumber function prints all the missing numbers in an array, including natural numbers", () => {
    it("throws error when the input is not array", () => {
        const error = `Error: Invalid input
        Make sure input is Array`;

        const testCases = [null, undefined, NaN, "Hello"];

        testCases.forEach(test => {
            expect(() => missingNumber(test)).toThrow(error);
        });
    });
    it("Throws error when the array has no element", () => {
        const error = "Error: empty array is invalid";
        expect(() => missingNumber([])).toThrow(error);
    });
    it("Finds missing number in a list of numbers, gives only natural numbers", () => {
        expect(missingNumber([2, 3, 6])).toStrictEqual([1, 4, 5]);
        expect(missingNumber([1, 2, 4, 5])).toStrictEqual([3]);
        expect(missingNumber([2, 3, 6, 8])).toStrictEqual([1, 4, 5, 7]);
    });
});