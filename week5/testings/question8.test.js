/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 20th, 2025 *

    Question 5. Backspace String Compare 
    Problem: 
    Given two strings s and t, return true if they are equal after interpreting # as a backspace. 
    Example: 
    Input: "ab#c", "ad#c" 
    Output: true 
    Both become "ac"

*/ 

import { describe, it, expect } from "vitest";
import { backspaceStringCompare } from "../src/question8";

describe("backspaceStringCompare checks if characters after space of two strings are the same or not", () => {
    it("Throws error when inputs are not string", () => {
        const error = `Error: Invalid Inputs
        Make sure inputs are strings`

        const testCases = [null, undefined, 123, [32]]

        testCases.forEach(test => {
            expect(() => backspaceStringCompare(test)).toThrow(error)
        })
    });
    it("Checks if characters after # hashtag - representing space are the same or not", () => {
        expect(backspaceStringCompare('12#hello', '13456#hello')).toBe(true)
        expect(backspaceStringCompare('abc#ac', '13456#ac')).toBe(true)
        expect(backspaceStringCompare('00#0', '00#hello')).toBe(false)
        expect(backspaceStringCompare('12#🖥', '13456#🖥')).toBe(true)
    });
});