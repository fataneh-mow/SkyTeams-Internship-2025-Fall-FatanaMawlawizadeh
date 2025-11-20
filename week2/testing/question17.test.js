/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 17. Sum of first N natural numbers 
    Description: Calculate and print the sum using a loop. 
    Example: 
    Input: 
    5 
    Output: 
    15

*/

import { describe, it, expect } from "vitest";
import { firstNumberSum } from "../src/question17";

describe("firstNumberSum finds first Natural Number sum properly", () => {
    it("Does not sum for inputs not number", () => {
        expect(firstNumberSum("a")).toBe("Insert a number");
        expect(firstNumberSum(Boolean)).toBe("Insert a number");
        expect(firstNumberSum(undefined)).toBe("Insert a number");
        expect(firstNumberSum("q2")).toBe("Insert a number");
    });
    it("Finds first N number sum with applicable values", () => {
        expect(firstNumberSum("2")).toBe(3);
        expect(firstNumberSum(null)).toBe(0); // Edge case
        expect(firstNumberSum("-2")).toBe(0);
        expect(firstNumberSum(5)).toBe(15);
        expect(firstNumberSum(1.8)).toBe(1);
        expect(firstNumberSum(2.5)).toBe(3);
    })
});