/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 18. Multiplication table of a number 
    Description: Print the multiplication table for a given number (up to 10 or N). 
    Example: 
    Input: 
    5 
    Output: 
    5 × 1 = 5 
    5 × 2 = 10 
    ... 
    5 × 10 = 50

*/

import { describe, it, expect } from "vitest";
import { multiplication } from "../src/question18";

describe("multiplication multiplies a number so to make a multiplication table of that", () => {
    it("Does not multiply inputs not number", () => {
        expect(multiplication("f")).toBe("Insert a number");
        expect(multiplication(undefined)).toBe("Insert a number");
        expect(multiplication("sa2")).toBe("Insert a number");
    });
    it("Multiplies applicable values", () => {
        expect(multiplication("2")).toEqual("2 × 1 = 2\n2 × 2 = 4\n2 × 3 = 6\n2 × 4 = 8\n2 × 5 = 10\n2 × 6 = 12\n2 × 7 = 14\n2 × 8 = 16\n2 × 9 = 18\n2 × 10 = 20\n");
        expect(multiplication(null)).toBe("null × 1 = 0\nnull × 2 = 0\nnull × 3 = 0\nnull × 4 = 0\nnull × 5 = 0\nnull × 6 = 0\nnull × 7 = 0\nnull × 8 = 0\nnull × 9 = 0\nnull × 10 = 0\n");  
        expect(multiplication("-2")).toBe("-2 × 1 = -2\n-2 × 2 = -4\n-2 × 3 = -6\n-2 × 4 = -8\n-2 × 5 = -10\n-2 × 6 = -12\n-2 × 7 = -14\n-2 × 8 = -16\n-2 × 9 = -18\n-2 × 10 = -20\n");
        expect(multiplication(1.5)).toBe("1.5 × 1 = 1.5\n1.5 × 2 = 3\n1.5 × 3 = 4.5\n1.5 × 4 = 6\n1.5 × 5 = 7.5\n1.5 × 6 = 9\n1.5 × 7 = 10.5\n1.5 × 8 = 12\n1.5 × 9 = 13.5\n1.5 × 10 = 15\n");
    });
});