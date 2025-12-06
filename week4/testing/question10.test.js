/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 10. Check Unique Characters 
    Description: Return whether a string contains only unique chars. 
    Example: 
    "hello" → Not Unique

*/

import { describe, it, expect } from "vitest";
import { isUnique } from "../src/question10";

describe("isUniques function returns if a string is unique or not", () => {
    it("Throws error  when the input is not string", () => {
        const error = `Error: Invalid Input
        Make sure inout is string`;

        const testCases = [null, undefined, 123];

        testCases.forEach(test => {
            expect(() => isUnique(test)).toThrow(error);
        });
    });
    it("Checks if strignis unique or not", () => {
        expect(isUnique("123")).toBe(true);
        expect(isUnique("aca2")).toBe(true);
        expect(isUnique("324abs")).toBe(true);
        expect(isUnique("hello")).toBe(false);
    });
});