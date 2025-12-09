/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 9th, 2025

    Question 20.Check Balanced Parentheses  
    Input: "{[()]}" → Output: Balanced 

*/

import { describe, it, expect, test } from "vitest";
import { isBalance } from "../src/question20";

describe("isBalance fucntion checks if series of parentheses are balanced or not", () => {
    it("Throws error when input is not string", () => {
        const error = `Error: Invalid Input
        Make sure input is string`

        const testCases = [null, undefined, 123]

        testCases.forEach(test => {
            expect(() => isBalance(test)).toThrow(error)
        })
    });
    it("Checks if oppenings are true and adds them to stack and if there be a pair matching them will remove it's pair from stack and does the comaprison in this way", () => {
        expect(isBalance("{[()]}")).toBe(true)
        expect(isBalance("{([])}")).toBe(true)
        expect(isBalance("[({})]")).toBe(true)
        expect(isBalance("{[(])}")).toBe(false)
        expect(isBalance("{[(}])")).toBe(false)
    })
});