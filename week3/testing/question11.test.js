/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 11. Generate all prime numbers up to N 
    Description: List all prime numbers up to a given limit using a loop. 
    Example: 
    Input: 
    10 
    Output: 
    2, 3, 5, 7

*/

import { describe, it, expect } from "vitest";
import { listPrimes } from "../src/question11";

describe("listPrimes function finds all prime numbers given a number", () => {
    it("Does not find prime numbers for values not applicable", () => {
        expect(() => listPrimes("Hello")).toThrow("Input must be number");
        expect(() => listPrimes(undefined)).toThrow("Input must be number");
        expect(() => listPrimes(null)).toThrow("Input must be number");
    });
    it("Does not find prime numbers if input is less than 2", () => {
        expect(() => listPrimes("-12")).toThrow("-12 is uncheckable");
        expect(() => listPrimes(0)).toThrow("0 is uncheckable");
        expect(() => listPrimes(-1)).toThrow("-1 is uncheckable");
    });
    it("List prime numbers", () => {
        expect(listPrimes(12)).toStrictEqual([2,3,5,7,11]);
        expect(listPrimes(10)).toStrictEqual([2,3,5,7]);
        expect(listPrimes(12/2)).toStrictEqual([2,3,5]);
        expect(listPrimes(15)).toStrictEqual([2,3,5,7,11,13]);
    });
});