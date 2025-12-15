/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 10. Check whether a number is prime 
    Description: Determine if a number is divisible only by 1 and itself. 
    Example: 
    Input: 
    17 
    Output: 
    Prime 
    Input: 
    20 
    Output: 
    Not Prime

*/

import { describe, it, expect } from "vitest";
import { isPrime } from "../src/question10";

describe("isPrime function finds if a number is prime or not", () => {
    it("Does not check for unapplicable values, not number", () => {
        expect(() => isPrime()).toThrow("Input must be number");
        expect(() => isPrime(null)).toThrow("Input must be number");
        expect(() => isPrime(undefined)).toThrow("Input must be number");
        expect(() => isPrime("Hello")).toThrow("Input must be number");
    });
    it("Does not check for numbers smaller than two", () => {
        expect(() => isPrime(-10)).toThrow("-10 is unchekable");
        expect(() => isPrime(-10.12)).toThrow("-10.12 is unchekable");
        expect(() => isPrime(1)).toThrow("1 is unchekable");
    });
    it("Checks for the different types of numbers expect smaller than 2", () => {
        expect(isPrime(12/2)).toBe("Not Prime");
        expect(isPrime(20)).toBe("Not Prime");
        expect(isPrime(7)).toBe("Prime");
        expect(isPrime(7.1)).toBe("Prime");
    });
});