/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 30th, 2025 *

    Question 23. Calculate Factorial Using Recursion 
    Description: Implement factorial(n), which calculates the factorial of n using recursion. 
    Example: 
    Input: 
    5 
    Output: 
    120

*/

import { describe, it, expect } from "vitest";
import { factorialNumber } from "../src/question23";

describe("factorialNumber uses recrusion and give factorial of a number N!", () => {
    it("Throws error when input is invalid", () => {
        const error = `Error: Invalid Input
       Input must not be one of the following
       String, Undefined, Null`

       const tesCases = [NaN, undefined, null, "Hello"];

       tesCases.forEach(test => {
            expect(() => factorialNumber(test)).toThrow(error);
       });
    });
    it("Gives factorial number of any integer, decimal and fractional number", () => {
        expect(factorialNumber(5)).toBe(120);
        expect(factorialNumber("-5")).toBe(120);
        expect(factorialNumber(10/5)).toBe(2);
        expect(factorialNumber(3.45)).toBe(6);
        expect(factorialNumber(-8/-2)).toBe(24);
        expect(factorialNumber(5)).toBe(120);
    });
});