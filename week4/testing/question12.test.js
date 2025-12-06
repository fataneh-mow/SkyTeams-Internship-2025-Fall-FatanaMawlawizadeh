/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 12. Character Frequency Counter 
    Description: Count occurrences of characters. 
    Input: "banana" → {b:1, a:3, n:2}

*/

import { describe, it, expect } from "vitest";
import { characterFerquencyCount } from "../src/question12";

describe("characterFerquencyCount function finds the ferquency of an string", () => {
    it("Throws error when input is invalid", () => {
        const error = `Error: Invalid input
        Make sure input is string`

        const testCases = [null, undefined, 123];

        testCases.forEach(test => {
            expect(() => characterFerquencyCount(test)).toThrow(error);
        });
    });
    it("Counts the ferquency of characters in a string and gives result in object", () => {
        expect(characterFerquencyCount("123")).toStrictEqual({1: 1, 2: 1, 3: 1});
        expect(characterFerquencyCount("aaabbccc")).toStrictEqual({a: 3, b: 2, c: 3});
        expect(characterFerquencyCount("$$$")).toStrictEqual({$: 3});
        expect(characterFerquencyCount("hello")).toStrictEqual({h: 1, e: 1, l: 2, o:1});
    });
});