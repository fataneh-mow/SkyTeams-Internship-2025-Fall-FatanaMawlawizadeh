/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 16. Fibonacci sequence 
    Description: Print the Fibonacci sequence up to N terms. 
    Example: 
    Input: 
    7 
    Output: 
    0, 1, 1, 2, 3, 5, 8
*/

import { describe, it, expect } from "vitest";
import { printFibonacciSeries } from "../src/question16";

describe("printFibonacciSeries prints fibonacci numbers in a series", () => {
    it("Throws error when thr input is invalid", () => {

        const error = `Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`;

        expect(() => printFibonacciSeries(null)).toThrow(error);
        expect(() => printFibonacciSeries(undefined)).toThrow(error);
        expect(() => printFibonacciSeries("Hello")).toThrow(error);
    });
    it("Directly returns the fibonacci list for numbers 0 and 1 without looping, making algoritm faster", () => {
        expect(printFibonacciSeries(0)).toStrictEqual([0]);
        expect(printFibonacciSeries(1)).toStrictEqual([0, 1]);
    });
    it("Prints fiboacci series of every number type: {Z} integer numbers, decimal numbers, fractional numbers", () => {
        expect(printFibonacciSeries(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        expect(printFibonacciSeries("7")).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);
        expect(printFibonacciSeries(-12.4)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
        expect(printFibonacciSeries(12/6)).toStrictEqual([0, 1]);
        expect(printFibonacciSeries(-12.2/6)).toStrictEqual([0, 1]);
    });
});