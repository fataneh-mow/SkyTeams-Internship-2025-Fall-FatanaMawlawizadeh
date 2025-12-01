/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 30th, 2025 *

    Question 28. Remove Duplicates from an Array 
    Description: Remove duplicate elements efficiently from an array. 
    Example: 
    Input: 
    [3, 1, 3, 5, 1] 
    Output: 
    [3, 1, 5]

*/

import { describe, it, expect, test } from "vitest";
import { removeDuplicates } from "../src/question28";

describe("removeDuplicates function removes duplicated elements from an array", () => {
    it("Throws error when input is not array", () => {
        const error = `Error: Invalid input
        Make sure input is Array`;

        const testCases = [null, undefined, "hello"];

        testCases.forEach(item => {
            expect(() => removeDuplicates(item)).toThrow(error);
        });
    });
    it("Throws error if array has no element", () => {
        const error = "Error: empty array is not valid";

        expect(() => removeDuplicates([])).toThrow(error);
    });
    it("Removes duplicates from an array", () => {
        expect(removeDuplicates([3, 1, 3, 5, 1])).toStrictEqual([3, 1, 5]);
        expect(removeDuplicates([1, 2, 3, 3, 3])).toStrictEqual([1, 2, 3]);
        expect(removeDuplicates(["hello", "hello"])).toStrictEqual(["hello"]);
        expect(removeDuplicates([-2, -3, -2, 2])).toStrictEqual([-2, -3, 2]);
        expect(removeDuplicates([-2, -3, -2.5, 2])).toStrictEqual([-2, -3, -2.5, 2]);
    });
});