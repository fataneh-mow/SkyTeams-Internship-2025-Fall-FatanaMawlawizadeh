/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 21. Longest Palindromic Substring 
    Input: "babad" → "bab" or "aba" 

*/

import { describe, it, expect } from "vitest";
import { longestPalindromicSubstring } from "../src/question21";

describe("longestPalindromicSubstring finds the longest sunstring which is palindromic to substring and returns it", () => {
    it("Throws error when input is not string", () => {
        const error = `Error: Invalid Input
        Make sure input is string`

        const testCases = [null, undefined, 123]
    
        testCases.forEach(test => {
            expect(() => longestPalindromicSubstring(test)).toThrow(error)
        })
    });
    it("Returns back the string that is empty", () => {
        expect(longestPalindromicSubstring('')).toBe('')
    })
    it("finds the longest palindrominc sub string and returns it", () => {
        expect(longestPalindromicSubstring('a')).toBe('a')
        expect(longestPalindromicSubstring('babad')).toBe('bab')
        expect(longestPalindromicSubstring('abc')).toBe('a')
    })
})