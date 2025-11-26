/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 4. Display all factors of a number 
    Description: Print all numbers that divide the given number exactly. 
    Example: 
    Input: 
    12 
    Output: 
    1, 2, 3, 4, 6, 12

*/

import { describe, it, expect } from "vitest";
import { numFactors } from "../src/question4";

describe("numFactors find factors of a number", () => {
    it("Does not find factors if input is not number", () => {
        expect(() => numFactors()).toThrow("Input must be number");
        expect(() => numFactors(undefined)).toThrow("Input must be number");
        expect(() => numFactors(null)).toThrow("Input must be number");
        expect(() => numFactors("Hello")).toThrow("Input must be number");
    });
    it("Find factors wehn input is positive number", () => {
        expect(numFactors(12)).toBe("12 factors are:1,2,3,4,6,12");
        expect(numFactors(7)).toBe("7 factors are:1,7");
    });
    it("Find factors wehn input is negative number", () => {
        expect(numFactors(-12)).toBe("-12 factors are:1,2,3,4,6,12");
        expect(numFactors("-7")).toBe("-7 factors are:1,7");
    });
    it("Find factors wehn input is fractional number", () => {
        expect(numFactors(12/1)).toBe("12 factors are:1,2,3,4,6,12");
    });
});