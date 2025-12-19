/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 17th, 2025 *

    Question 4. Evaluate Reverse Polish Notation (RPN) 
    Problem: 
    Evaluate an expression in Reverse Polish Notation. 
    Valid operators: + - * /. 
    Example: 
    Input: ["2","1","+","3","*"] 
    Output: 9 
    Explanation: (2 + 1) * 3 

*/

import { describe, it, expect } from "vitest";
import { reversePolishNotation } from "../src/question7";

describe("reversePolishNotation function solves operations that are written in other ways than infix way, in profix way", () => {
    it("Throws error when input is not array or an array with a length of zero", () => {
        const error = `Error: Invalid input
        Make sure input is an array of numbers and oprators`

        const testCases = [null, undefined, "hello", 11]
        
        testCases.forEach(test => {
            expect(() => reversePolishNotation(test)).toThrow(error)
        })

        expect(() => reversePolishNotation([])).toThrow(error)
    });
    it("Claculates operations written in profix way using a stack", () => {
        expect(reversePolishNotation(['1', '2', '+', '3', '*'])).toBe(9)
        expect(reversePolishNotation(['1', '5', '+', '3', '*'])).toBe(18)
        expect(reversePolishNotation(['0', '12', '+', '3', '14', '*'])).toBe(42)
        expect(reversePolishNotation(['0', '-12', '+', '3', '14', '*'])).toBe(42)
        expect(reversePolishNotation(['0', '3,1', '-', '1', '2', '/'])).toBe(0.5)
    });
});