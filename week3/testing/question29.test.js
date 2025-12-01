/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 29. Check if Two Arrays Are Equal 
    Description: Compare two arrays and determine if they contain the same elements in the same 
    order. 
    Example: 
    Input: 
    [1, 2, 3], [1, 2, 3] 
    Output: 
    Equal 

*/

import { describe, it, expect } from "vitest";
import { isArrayEqual } from "../src/question29";

describe("isArrayEqual checks if two array's elements are equal to each other or not -> in order", () => {
    it("Throws error when the input i not array", () => {
        const error = `Error: Invalid input
        Make sure input is Array`;

        const testCases = [null, undefined, "hello", Number(12), String(1),];

        testCases.forEach( test => {
            expect(() => isArrayEqual(test, [])).toThrow(error);
        });
    });

    it("Throws error when the array has no element", () => {
        const error = "Error: empty array is invalid";

        expect(() => isArrayEqual([], [1,2])).toThrow(error);
    });

    it("Returns Not Equal when the arrays lengths are not the same", () => {
        expect(isArrayEqual([1], [1,2])).toBe("Not Equal");
        expect(isArrayEqual([1, 2, 3], [1, 3])).toBe("Not Equal");
    });

    it("Checks for array equality", () => {
        expect(isArrayEqual([1, 2], [1, 2])).toBe("Equal");
        expect(isArrayEqual([null, undefined], [null, undefined])).toBe("Equal");
        expect(isArrayEqual([1, 2], [1, 3])).toBe("Not Equal");
        expect(isArrayEqual([1, -2], [1, -2])).toBe("Equal");
        expect(isArrayEqual([1, 2], [1, 3])).toBe("Not Equal");
    });
});