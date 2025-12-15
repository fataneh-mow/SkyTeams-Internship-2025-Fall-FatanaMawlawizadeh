/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 30th, 2025 *

    Question 22. Collatz Sequence (Hailstone Numbers) 
    Description: 
    Take a number n. 
    • If n is even, divide it by 2. 
    • If n is odd, multiply it by 3 and add 1. 
    • Repeat until n = 1. 
    • Count the number of steps to reach 1. 
    Example: 
    Input: 
    6 
    Output: 
    6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)

*/

import { describe, it, expect, test } from "vitest";
import { collatzSeries } from "../src/question22";

describe("collatz series function finds the collatz series of a given function", () => {
    it("Does not check for invalid inputs", () => {
        const error = `Error: Invalid input
        Make sure input is not one of the following:
        String, Undefined, Null`

        const testCases = [null, undefined, NaN]

        testCases.forEach(test => {
            expect(() => collatzSeries(test)).toThrow(error);
        });
    });
    it("Returns the series and the number of loop iteration, with every type of number", () => {
        expect(collatzSeries("12")).toEqual(`12,6,3,10,5,16,8,4,2,1 (stepes: 9)`) ;       
        expect(collatzSeries(-12)).toEqual(`12,6,3,10,5,16,8,4,2,1 (stepes: 9)`) ;       
        expect(collatzSeries(-12.45)).toEqual(`12,6,3,10,5,16,8,4,2,1 (stepes: 9)`) ;       
        expect(collatzSeries(18/2)).toEqual(`9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1 (stepes: 19)`) ;           
    });
});