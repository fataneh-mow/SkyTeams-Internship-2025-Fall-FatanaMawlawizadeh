/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 7. Write a function to find the sum of all elements in an array 
    Description: Calculate the total sum of all array elements. 
    Example: 
    Input: 
    [1, 2, 3, 4, 5] 
    Output: 
    15

*/

import { describe, it, expect } from "vitest";
import { arraySum } from "../src/question7";

describe("arraySum finds the sum of numbers in an array", () => {
    it("Does not sums when the inout don't be array or an empty array", () => {
        expect(() => arraySum()).toThrow("Input must be an array that is not empty");
        expect(() => arraySum("Hello")).toThrow("Input must be an array that is not empty");
        expect(() => arraySum("[1, 2]")).toThrow("Input must be an array that is not empty");
        expect(() => arraySum(undefined)).toThrow("Input must be an array that is not empty");
    });
    it("Sums all the numbers in an array", () => {
        expect(arraySum([1, 2, 3])).toBe(6);
    });
    it("Sums all the numbers in an array having negative numbers", () => {
        expect(arraySum([-1, -2, 4])).toBe(1);
    });
    it("Sums all the numbers in an array having negative numbers", () => {
        expect(arraySum([-1, -2, -4])).toBe(-7);
    });
    it("Sums all the numbers in an array having decimal numbers", () => {
        expect(arraySum([12.5, 6.4, 1.1])).toBe(20);
    });
});