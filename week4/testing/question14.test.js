/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 7th, 2025

    Question 14. All Permutations of a String 
    Description: Generate all permutations. 
    Input: "abc" → abc, acb, bac, ... 

*/

import { describe, it, expect, test } from "vitest";
import { stringPermutations } from "../src/question14";

describe("stringPermutations function finds all permutations of a string", () => {
    it("Throws error when the input is not string", () => {
        const error = `Error: Invalid input
        Make sure input is string`

        const testCases = [null, undefined, 123]

        testCases.forEach(test => {
            expect(() => stringPermutations(test)).toThrow(error)
        })
    });
    it("Returns empty string when the input is empty string", () => {
        expect(stringPermutations("")).toStrictEqual([""])
    });
    it("Finds all permutations of a string", () => {
        expect(stringPermutations("abc")).toStrictEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
        expect(stringPermutations("abd")).toStrictEqual(['abd', 'adb', 'bad', 'bda', 'dab', 'dba'])
    });
});