/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 13. String Pattern Matching ("abba") 
    Description: Check if sentence follows the pattern. 
    Example: "dog cat cat dog" → True

*/

import { describe, it, expect, test } from "vitest";
import { isPatternMatchingString } from "../src/question13";

describe("stringPatternMatching checks if a string patterns matches it or not", () => {
    it("Throws error when input is not string", () => {
        const error = `Error: Ivalid inputs
        Make sure inputs are string`

        const testCases = [null, undefined, 123];

        testCases.forEach(test => {
            expect(() => isPatternMatchingString(test)).toThrow(error);
        })
    });
    it("Checks the string pattern and return true if it matches, else returns false", () => {
        expect(isPatternMatchingString("abab", "mama")).toBe(true);
        expect(isPatternMatchingString("abcabc", "fruit vegetable meat fruit vegetable meat")).toBe(true);
        expect(isPatternMatchingString("aaaa", "12 12 12 13")).toBe(false);
        expect(isPatternMatchingString("xyz", "book")).toBe(false);
    }); 
});