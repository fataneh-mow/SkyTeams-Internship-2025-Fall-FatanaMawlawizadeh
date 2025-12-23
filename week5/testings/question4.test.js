/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 16th, 2025 *

    Question 1. Valid Parentheses 
    Problem: 
    Given a string containing only '(' , ')' , '{' , '}' , '[' , ']', determine if the string 
    is valid. 
    A valid string must have brackets closed in the correct order. 
    Example: 
    Input: s = "()[]{}" 
    Output: true 
    Input: s = "(]" 
    Output: false

*/

import { describe, it, expect } from "vitest";
import { isStringValid } from "../src/question4";

describe("`isStringValid function checks if a string and parentheses inside it are valid or not", () => {
    it("Throws error when input is not string", () => {
        const error = `Error: Invalid Input
        Make sure input is string`

        const testCases = [null, undefined, 123, [12]]

        testCases.forEach(test => {
            expect(() => isStringValid(test)).toThrow(error)
        })
    });
    it("Throws error when input is an empty string", () => {
        const error = `Error: Empty string is not valid`
        expect(() => isStringValid('')).toThrow(error)
    });
    it("Checks if a string is valid or not", () => {
        expect(isStringValid('{}')).toBe(true)
        expect(isStringValid('{}()')).toBe(true)
        expect(isStringValid('{}{')).toBe(false)
        expect(isStringValid('{}[')).toBe(false)
        expect(isStringValid('{}[]()')).toBe(true)
        expect(isStringValid('(){}[]')).toBe(true)
        expect(isStringValid('{()}')).toBe(false)
        expect(isStringValid('{}10')).toBe(false)
    });
});