/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 9. Write a function to count occurrences of an element in an array 
    Description: Count how many times a given number appears in the array. 
    Example: 
    Input: 
    Array = [2, 3, 2, 5, 2], Element = 2 
    Output: 
    3
*/

import { describe, it, expect } from "vitest";
import { repitionCount } from "../src/question9";

describe("repititionCount function counts if how many times an element is repeated in a list", () => {
    it("Does not check for repition when input be invalid", () => {
        expect(() => repitionCount("Hello", "H")).toThrow("Input must be a list as an array and an item as a number");
        expect(() => repitionCount(undefined)).toThrow("Input must be a list as an array and an item as a number");
        expect(() => repitionCount(null)).toThrow("Input must be a list as an array and an item as a number");
        expect(() => repitionCount(["hello"], "hello")).toThrow("Input must be a list as an array and an item as a number");
    });
    it("Checks for the repeated element", () => {
        expect(repitionCount([1, 2], 2)).toBe("2 repeated in this list 1 times");
        expect(repitionCount([1, 0, 6, 8, 9], 2)).toBe("2 repeated in this list 0 times");
        expect(repitionCount([-1, 2], -1)).toBe("-1 repeated in this list 1 times");
        expect(repitionCount([1.14, 2], 1.14)).toBe("1.14 repeated in this list 1 times");
    });
});