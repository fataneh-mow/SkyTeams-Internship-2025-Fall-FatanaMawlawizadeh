/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 11. String Rotation Check 
    Description: Check if one string is rotation of another. 
    Example: 
    "waterbottle", "erbottlewat" → True

*/

import { describe, it, expect, test } from "vitest";
import { stringRotationCheck } from "../src/question11";

describe("stringRotationCheck checks if string A, doubbled is equal to string B or not", () => {
    it("Throws error when one of inputs is not string", () => {
        const error = `Error: Invalid inputs
        Make sure inputs are strings`

        const testCases = [undefined, 123, null];

        testCases.forEach(test => {
            expect(() => stringRotationCheck(test, test)).toThrow(error);
        });
    });
    it("Checks if a string doubbled is part of string A or not", () => {
        expect(stringRotationCheck("waterbottle", "erbottlewat")).toBe(true);
        expect(stringRotationCheck("abcde", "cdeab")).toBe(true);
        expect(stringRotationCheck("abc", "acb")).toBe(false);
        expect(stringRotationCheck("aa", "aa")).toBe(true);
    });
});