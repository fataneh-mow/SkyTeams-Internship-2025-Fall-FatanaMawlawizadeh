/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 13. Power of a number (without built-in function) 
    Description: Compute a^b using repeated multiplication. 
    Example: 
    Input: 
    2, 5 
    Output: 
    32 

*/

import { describe, it, expect } from "vitest";
import { toPower } from "../src/question13";

describe("toPower function powers a number", () => {
    it("Does not work for inputs not number, and when power is zero", () => {
        expect(() => toPower(12, "hello")).toThrow("Base and power must be numbers");
        expect(() => toPower(12, undefined)).toThrow("Base and power must be numbers");
        expect(() => toPower(null, 1)).toThrow("Base and power must be numbers");
        expect(() => toPower(12, 0)).toThrow("power must be grater than zero");
    });
    it("Finds number(x) to power(y)", () => {
        expect(toPower(2, 3)).toBe(8);
        expect(toPower(3, 2)).toBe(9);
        expect(toPower(4, 2)).toBe(16);
    });
});