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
import { reverseNumber } from "../src/question2";

describe("reverseNumber function reserves numbers", () => {
    it("Does not reserve inputs rather than number", () => {

        const error = `Error: Invalid Input
        Make sure your input is anything except the following
        String, Undefined, Null`

        expect(() => reverseNumber()).toThrow(error);
        expect(() => reverseNumber(undefined)).toThrow(error);
        expect(() => reverseNumber(null)).toThrow(error);
        expect(() => reverseNumber("Hello")).toThrow(error);
    });
    it("Reserves positive numbers", () => {
        expect(reverseNumber("12")).toBe(21);
        expect(reverseNumber(12)).toBe(21);
        expect(reverseNumber(456)).toBe(654);
    });
    it("Reserves different numbers", () => {
        expect(reverseNumber(-112)).toBe(-211);
        expect(reverseNumber(9/3)).toBe(3);
    });
});