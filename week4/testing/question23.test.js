/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 23. Top K Frequent Elements
    Input: [1,1,1,2,2,3], k=2 → [1,2] 

*/

import { describe, it, expect } from "vitest";
import { kTimesFerquentElements } from "../src/question23";

describe("kTimesFerquentElements function finds elements that are repeated specified times or more than the specified times", () => {
    it("Throws error when the inputs are not array and a number of frequency times", () => {
        const error = `Error: Invalid Input
        Make sure your input is an array and a number of element ferquency`

        const testCases = [undefined, null, 'hello']

        testCases.forEach(test => {
            expect(() => kTimesFerquentElements(test, test)).toThrow(error)
        })
    });
    it("Finds elements repeated k Times or more than it!", () => {
        expect(kTimesFerquentElements([1234, 123, 123], 2)).toStrictEqual([123]);
        expect(kTimesFerquentElements([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
        expect(kTimesFerquentElements([1, 1, 1, 2, 2, 3], 10)).toStrictEqual([]);
        expect(kTimesFerquentElements([1, -1, -1,], 2)).toStrictEqual([-1]);
    });
});