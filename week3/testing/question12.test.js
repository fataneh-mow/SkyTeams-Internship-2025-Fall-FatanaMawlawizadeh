/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 12. Check for palindrome number 
    Description: Check if a number reads the same backward and forward. 
    Example: 
    Input: 
    121 
    Output: 
    Palindrome 
    Input: 
    123 
    Output: 
    Not Palindrome

*/

import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/question12";

describe("isPalindrome checks if a number is palindrome or not", () => {
    it("Does not check for inputs not number", () => {
        const error = `Error: Invalid input
        Make sure input is number`

        const testCases = [null, undefined, "hello"];

        testCases.forEach(test => {
            expect(() => isPalindrome(test)).toThrow(error);
        })
    });
    it("Checks for numbers if they are palindrome or not", () => {
        expect(isPalindrome("121")).toBe(true);
        expect(isPalindrome(1234)).toBe(false);
        expect(isPalindrome(10)).toBe(false);
        expect(isPalindrome(-123)).toBe(false);
        expect(isPalindrome(1254.435)).toBe(false);
    });
});