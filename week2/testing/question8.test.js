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
import { numberSign } from "../src/question8";

describe("numberCategory checks whether if a number is negative, positive or zero", () => {
    it("Does not check values not number, or strings not number", () => {
        expect(numberSign("true")).toBe("true is not checkable");
        expect(numberSign(undefined)).toBe("undefined is not checkable");
        expect(numberSign("asd")).toBe("asd is not checkable");
    });
    it("Checks the null a zero", () => {
        expect(numberSign(null)).toBe("null is zero");
    });
    it("Checks all type of numbers", () => {
        expect(numberSign(0.19)).toBe("0.19 is positive");
        expect(numberSign(-0.19)).toBe("-0.19 is negative");
        expect(numberSign(3/4)).toBe("0.75 is positive");
        expect(numberSign(-1/9)).toBe("-0.1111111111111111 is negative");
    });
});