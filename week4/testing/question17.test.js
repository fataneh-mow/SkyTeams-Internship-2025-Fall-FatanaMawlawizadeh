/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 17. Sentence Abbreviation 
    Description: Convert sentence into first-letter abbreviation. 
    Example: "I am learning JavaScript" → "I a l J"

*/

import { describe, it, expect } from "vitest";
import { sentenceAbbreviation } from "../src/question17";

describe("sentenceAbbreviation function abbreviates a sentence based on the first letter of every word", () => {
    it("Throws error when the input is not string", () => {
        const error = `Error: Invalid input
        Make sure input is string`

        const testCases = [123, null, undefined];

        testCases.forEach(test => {
            expect(() => sentenceAbbreviation(test)).toThrow(error);
        })
    });
    it("Abbreviates a sentesnce and returns first letter of every word", () => {
        expect(sentenceAbbreviation("I Study JavaScript")).toBe("I S J ");
        expect(sentenceAbbreviation("Weather is nice")).toBe("W i n ");
        expect(sentenceAbbreviation("I am an intern")).toBe("I a a i ");
        expect(sentenceAbbreviation("Pizza is delicious")).toBe("P i d ");
    });
});