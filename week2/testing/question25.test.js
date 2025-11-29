/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 25. Find LCM of two numbers 
    Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) / 
    GCD(a, b) 
    Example: 
    Input: 
    12, 18 
    Output: 
    36 

*/

import { describe, it, expect } from "vitest";
import { findLCM } from '../src/question25';

describe("LCM Function Tests", () => {
    it("Does not check for unapplicable inputs", () => {
        expect(findLCM(12, undefined)).toBe("Insert only numbers");
        expect(findLCM("abc", undefined)).toBe("Insert only numbers");
        expect(findLCM("hello", 5)).toBe("Insert only numbers");
    });
    it("Finds LCM with positive numbers", () => {
        expect(findLCM(12, 18)).toBe("LCM of 12, 18 is 36");
        expect(findLCM(100, 80)).toBe("LCM of 100, 80 is 400");
        expect(findLCM(7, 5)).toBe("LCM of 7, 5 is 35");
        expect(findLCM(9, 9)).toBe("LCM of 9, 9 is 9");
        expect(findLCM(20, 100)).toBe("LCM of 20, 100 is 100");
    });
    it("Handles zero correctly", () => {
        expect(findLCM(0, 5)).toBe("LCM of 0, 5 is 0");
        expect(findLCM(12, 0)).toBe("LCM of 12, 0 is 0");
    });
});

