/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 6. Write a function to find the smallest element in an array 
    Description: Find and return the smallest number in an array. 
    Example: 
    Input: 
    [4, 7, 1, 9, 2] 
    Output: 
    1

*/

import { describe, it, expect } from "vitest";
import { smallestNum } from "../src/question6";

describe("smallestNum finds the smallest number in a list", () => {
    it("Does not find the smallest number when input is not array or empty array", () => {
        expect(() => smallestNum()).toThrow("Input must be an array that is not empty");
        expect(() => smallestNum(undefined)).toThrow("Input must be an array that is not empty");
        expect(() => smallestNum([])).toThrow("Input must be an array that is not empty");
    });
    it("Finds the smallest number in an array", () => {
        expect(smallestNum([12, 4, 5])).toBe("12,4,5 smallest number is 4");
        expect(smallestNum([0, 3, 2])).toBe("0,3,2 smallest number is 0");
        expect(smallestNum([12, 4, "5"])).toBe("12,4,5 smallest number is 4");
    });
    it("Finds the smallest number in an array with negative numbers", () => {
        expect(smallestNum([12, 4, -5])).toBe("12,4,-5 smallest number is -5");
        expect(smallestNum([0, -3, 2])).toBe("0,-3,2 smallest number is -3");
        expect(smallestNum([12, 4, "-5"])).toBe("12,4,-5 smallest number is -5");
    });
    it("Finds the smallest number in an array with decimal numbers", () => {
        expect(smallestNum([12, 4.2, -5.2])).toBe("12,4.2,-5.2 smallest number is -5.2");
    });
});