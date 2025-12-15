/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 8. Write a function to check if an array contains a specific element 
    Description: Determine if a given element exists in the array. 
    Example: 
    Input: 
    Array = [3, 6, 9, 12], Element = 6 
    Output: 
    Found

*/

import { describe, it, expect } from "vitest";
import { elementExist } from "../src/question8";

describe("elementExist checks if an elemnet exists in the list or not", () => {
    it("Does not check for unapplicable inputs", () => {
        expect(() => elementExist()).toThrow("Inputs must be array of numbers and a number");
        expect(() => elementExist("Hello", "H")).toThrow("Inputs must be array of numbers and a number");
        expect(() => elementExist([1, 2], "2")).toThrow("Inputs must be array of numbers and a number");
        expect(() => elementExist(undefined)).toThrow("Inputs must be array of numbers and a number");
    });
    it("Checks for the existing elemnt", () => {
        expect(elementExist([1, 2], 2)).toBe(true);
        expect(elementExist([1, 0, 6, 8, 9], 2)).toBe(false);
        expect(elementExist([-1, 2], -1)).toBe(true);
        expect(elementExist([1.14, 2], 1.14)).toBe(true);
    });
});