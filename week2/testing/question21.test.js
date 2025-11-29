/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 21. Sum of digits 
    Description: Calculate the sum of all digits of a number. 
    Example: 
    Input: 
    123 
    Output: 
    6

*/

import { describe, it, expect } from "vitest";
import { digitsSum } from "../src/question21";

describe("digitSum finds the sum of digits in a number", () => {
    it("Does not sum unnapplicable numbers", () => {
        expect(digitsSum(undefined)).toBe("Insert a number");
        expect(digitsSum(null)).toBe("Insert a number");
        expect(digitsSum("32*")).toBe("Insert a number");
        expect(digitsSum("xy")).toBe("Insert a number");
    });
     it("Sums digits of positive numbers", () => {
        expect(digitsSum("123")).toBe("123 sum is 6");
        expect(digitsSum(123)).toBe("123 sum is 6");
        expect(digitsSum("32")).toBe("32 sum is 5");
        expect(digitsSum("12.4")).toBe("12.4 sum is 7");
    });
});