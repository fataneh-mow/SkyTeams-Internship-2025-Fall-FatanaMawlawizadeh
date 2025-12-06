/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 4. Intersection of Two Arrays 
    Description: Return elements present in both arrays. 
    Example: 
    Input: [1, 2, 3, 4], [3, 4, 5, 6] 
    Output: [3, 4] 

*/

import { describe, it, expect } from "vitest";
import { setIntersection } from "../src/question4";

describe("setIntersection function finds elements that are the same in two sets(arrays)", () => {
    it("Throws error when inputs are not arrays", () => {
        const error = `Error: Invalid Input
        Make sure input is two arrays`

        const testCases = [null, undefined, "Hello", 123];

        testCases.forEach( test => {
            expect(() => setIntersection(test, test)).toThrow(error);
        });
    });
    it("Finds matching elements in two array", () => {
        expect(setIntersection(["Hello", 12, 54], ["Hello", 45, 12])).toStrictEqual(["Hello", 12]);
        expect(setIntersection([44.09, 32, 15], ["Hello", 44.009, 44])).toStrictEqual([]);
        expect(setIntersection(["ABc", 12, 87, 98], ["ABC", 45, 12, 98])).toStrictEqual([12, 98]);
    });
});