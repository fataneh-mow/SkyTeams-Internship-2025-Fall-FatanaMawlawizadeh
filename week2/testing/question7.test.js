/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to check wheteher a number is even or odd

    Description: Determine if a number is divisible by 2. 
    Example: 
    Input: 
    7 
    Output: 
    Odd
*/

import { describe, it, expect } from "vitest";
import { typeNumber } from "../src/question7";

describe("typeNumber function detects wheter a number is even or odd", () => {
    it("Only checks numbers that are number type", () => {
        expect(typeNumber("asdf")).toBe("asdf is not checkable");
        expect(typeNumber("12")).toBe("12 is even");
        expect(typeNumber("0")).toBe("0 is even");
        expect(typeNumber("0as")).toBe("0as is not checkable");
    })
    it("Works properly with every number type", () => {
        expect(typeNumber(12)).toBe("12 is even");
        expect(typeNumber(-18930)).toBe("-18930 is even");
        expect(typeNumber(-185)).toBe("-185 is odd");
        expect(typeNumber(0)).toBe("0 is even");
        expect(typeNumber(0.45)).toBe("0.45 is odd");
        expect(typeNumber(4.11)).toBe("4.11 is odd");
    });
});