/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 19. Reverse a number 
    Description: Reverse the digits of an integer. 
    Example: 
    Input: 
    1234 
    Output: 
    4321

*/

import { describe, it, expect } from "vitest";
import { reverseNumber } from "../src/question19";

describe("reserveNumber reverses every number sequence", () => {
    it("Does not reserves inputs not number", () => {
        expect(reverseNumber("f")).toBe("Insert number");
        expect(reverseNumber(undefined)).toBe("Insert number");
        expect(reverseNumber("sa2")).toBe("Insert number");
    });
    it("Reserves inputs that are numbers", () => {
        expect(reverseNumber("1234")).toBe(4321);
        expect(reverseNumber(null)).toBe("Insert positive numbers");
        expect(reverseNumber(7890)).toBe(987);
        expect(reverseNumber(432.5)).toBe(5.234);
        expect(reverseNumber(46.78)).toBe(87.64);
    });
});