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
        expect(() => isPalindrome("Hello")).toThrow("Input must be number");
        expect(() => isPalindrome(null)).toThrow("Input must be number");
        expect(() => isPalindrome(undefined)).toThrow("Input must be number");
        expect(() => isPalindrome("12ab")).toThrow("Input must be number");
    });
    it("Does not check for inputs smaller than zero or equal", () => {
        expect(() => isPalindrome(-12)).toThrow("Number is not applicable");
        expect(() => isPalindrome(0)).toThrow("Number is not applicable");
    });
    it("Checks for numbers if they are palindrome or not", () => {
        expect(isPalindrome("121")).toBe("Palindrome");
        expect(isPalindrome(1234)).toBe("Not Palindrome");
        expect(isPalindrome(10)).toBe("Not Palindrome");
        expect(isPalindrome(123)).toBe("Not Palindrome");
        expect(isPalindrome(1254)).toBe("Not Palindrome");
    });
});