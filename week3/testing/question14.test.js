/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 14. Find factorial of a number 
    Description: Compute N! using iterative approach. 
    Example: 
    Input: 
    5 
    Output: 
    120

*/

import { describe, it, expect} from "vitest";
import { factorialNumber } from "../src/question14";

describe("factorialNumber function finds the factorial number N!", () => {
    it("Does not find N! when the input doesn't be number", () => {
        const error = `Error: Invalid input
        Make sure inout is not one of the following
        String, undefined, null`

        expect(() => factorialNumber("hello")).toThrow(error);
        expect(() => factorialNumber(null)).toThrow(error);
        expect(() => factorialNumber(undefined)).toThrow(error);
    });
    it("Throws error wehn the number is equal to zero", () => {
        const error = `Error: zero is not a valid number`;

        expect(() => factorialNumber(0)).toThrow(error);
        expect(() => factorialNumber("0")).toThrow(error);
    });
    it("finds N! of every number type, positive - negative - decimal - fraction", () => {
        expect(factorialNumber(5)).toBe(120);
        expect(factorialNumber(3.01)).toBe(6);
        expect(factorialNumber(3.99)).toBe(6);
        expect(factorialNumber(-12)).toBe(479001600);
        expect(factorialNumber(12/6)).toBe(2);
        expect(factorialNumber(-12/6)).toBe(2);
        expect(factorialNumber(2.90/2)).toBe(1);
    });
});