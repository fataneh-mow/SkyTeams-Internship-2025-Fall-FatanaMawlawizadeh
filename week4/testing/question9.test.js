/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 9.String Compression 
    Description: Compress using counts of consecutive characters. 
    Example: 
    "aabcccccaaa" → "a2b1c5a3"

*/

import { describe, it, expect } from "vitest";
import { stringCompression } from "../src/question9";

describe("stringCompression counts the repitition of a character inside a string and returns a new string in a new version", () => {
    it("Throws error when the input is not string", () => {
        const erorr = `Error: Invalid Input
        Make sure your input is string`

        const testCases = [null, undefined, 123];

        testCases.forEach(test => {
            expect(() => stringCompression(test)).toThrow(erorr);
        });
    });
    it("Compresses string and returns a new compressed string", () => {
        expect(stringCompression("$$$&***")).toBe("$3&1*3");
        expect(stringCompression(`"""3`)).toBe(`"3`);
        expect(stringCompression("🍲🍲📫")).toBe("🍲2📫1");
        expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
    });
});