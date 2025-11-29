/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to Compute Simple and Compound Interest
    Simple Interest = (P × R × T) / 100 
    Compound Interest = P × ((1 + R/100) ^ T - 1) 
    Example: 
    Input: 
    P = 1000, R = 5, T = 2 
    Output: 
    SI = 100, CI ≈ 102.5
   
*/

import { describe, it, expect } from "vitest";
import { simpleInterest, compoundInterest } from "../src/question5";

describe("simpleInterest and compundInterest function finds SI and CI properly", () => {
    it("finds SI and CI among positive numbers", () => {
        expect(simpleInterest(2500, 4, 3)).toBe("SI = 300");
        expect(simpleInterest(1800, 7, 2)).toBe("SI = 252");
        expect(compoundInterest(2500, 4, 3)).toBe("CI = 312.2");
        expect(compoundInterest(1800, 7, 2)).toBe("CI = 260.8");
    });
    it("finds SI and CI among positive and negative numbers", () => {
        expect(simpleInterest(-1000, 5, 2)).toBe("SI = -100");
        expect(simpleInterest(-1500, 6, 3)).toBe("SI = -270");
        expect(compoundInterest(-1000, 5, 2,)).toBe("CI = -102.5");
        expect(compoundInterest(-1500, 6, 3)).toBe("CI = -286.5");
    });
    // it("finds SI and CI among decimal numbers", () => {                 // must to find it's problem!
    //     expect(simpleInterest(1500.5, 4.5, 1.5)).toBe("SI = 101.2");
    //     expect(compoundInterest(1500.5, 4.5, 1.5)).toBe("CI = 106.8");
    // });
    it("finds SI and CI among zero with other numbers", () => {
        expect(simpleInterest(2000, 0, 3)).toBe("SI = 0");
        expect(compoundInterest(2000, 0, 3)).toBe("CI = 0.0");
    });
    it("finds SI and CI among zero with inputs stringed numbers", () => {
        expect(simpleInterest("1000", "5", "2")).toBe("SI = 100");
        expect(compoundInterest("1000", "5", "2")).toBe("CI = 102.5");
    });
    it("finds SI and CI among zero with inputs string and numbers", () => {
        expect(simpleInterest("hello", 5, 2)).toBe("SI = NaN");
        expect(compoundInterest("hello", 5, 2)).toBe("CI = NaN");
    });
});