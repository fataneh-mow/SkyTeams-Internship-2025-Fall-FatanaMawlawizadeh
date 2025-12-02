/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 5. Write a function to find the largest element in an array 
    Description: Given an array of numbers, return the largest value. 
    Example: 
    Input: 
    [2, 8, 5, 3, 9] 
    Output: 
    9 

*/

import { describe, it, expect } from "vitest";
import { greatestNum } from "../src/question5";

describe("greatestNum finds the greatest number in a list", () => {
    it("Does not find the gratest number when input is not an array", () => {
        expect(() => greatestNum()).toThrow("Input must be an array that is not empty");
        expect(() => greatestNum(undefined)).toThrow("Input must be an array that is not empty");
        expect(() => greatestNum(null)).toThrow("Input must be an array that is not empty");
    });
    it("Finds greatest number inseide a lsit", () => {
        expect(greatestNum([12, 15])).toBe(15);
        expect(greatestNum([12, 0])).toBe(12);
        expect(greatestNum([12, "18"])).toBe("18");
    });
    it("Finds greatest number inseide a lsit of negative numbres", () => {
        expect(greatestNum([12, -15])).toBe(12);
        expect(greatestNum([-20, -12])).toBe(-12);
    });
    it("Finds greatest number inseide a lsit of decimal numbres", () => {
        expect(greatestNum([4.8, 4.3])).toBe(4.8);
        expect(greatestNum([5.1,5.4])).toBe(5.4);
    });
});