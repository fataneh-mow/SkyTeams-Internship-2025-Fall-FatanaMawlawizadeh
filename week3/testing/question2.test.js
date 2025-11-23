/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 2. Reverse a number 
    Description: Reverse the digits of a number. 
    Example: 
    Input: 
    1234 
    Output: 
    4321

*/

import { describe, it, expect } from "vitest";
import { reserveNumber } from "../src/question2";

describe("reserveNumber function reserves numbers", () => {
    it("Does not reserve inputs rather than number", () => {
        expect(() => reserveNumber()).toThrow("Insert number");
        expect(() => reserveNumber(undefined)).toThrow("Insert number");
        expect(() => reserveNumber(null)).toThrow("Insert number");
        expect(() => reserveNumber("Hello")).toThrow("Insert number");
    });
    it("Reserves positive numbers", () => {
        expect(reserveNumber("12")).toBe("12 reserved is 21");
        expect(reserveNumber(12)).toBe("12 reserved is 21");
        expect(reserveNumber(456)).toBe("456 reserved is 654");
    });
    it("Reserves different numbers", () => {
        expect(reserveNumber(1.2)).toBe("1.2 reserved is 2.1");
        expect(reserveNumber(-112)).toBe("-112 reserved is 211-");
        expect(reserveNumber(9/3)).toBe("3 reserved is 3");
        expect(reserveNumber("2/5")).toBe("0.4 reserved is 4.0");
    });
});