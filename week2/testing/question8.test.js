/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to Determine if a number is positive, negative, or zero      
    Description: Use if-else statements to categorize a number. 
    Example: 
    Input: 
    -3 
    Output: 
    Negative
*/

import { describe, it, expect } from "vitest";
import { numberCategory } from "../src/question8";

describe("numberCategory checks whether if a number is negative, positive or zero", () => {
    it("Does not check values not number, or strings not number", () => {
        expect(numberCategory("true")).toBe("true is not checkable");
        expect(numberCategory(undefined)).toBe("undefined is not checkable");
        expect(numberCategory("asd")).toBe("asd is not checkable");
    });
    it("Checks the null a zero", () => {
        expect(numberCategory(null)).toBe("null is zero");
    });
    it("Checks all type of numbers", () => {
        expect(numberCategory(0.19)).toBe("0.19 is positive");
        expect(numberCategory(-0.19)).toBe("-0.19 is negative");
        expect(numberCategory(3/4)).toBe("0.75 is positive");
        expect(numberCategory(-1/9)).toBe("-0.1111111111111111 is negative");
    });
});