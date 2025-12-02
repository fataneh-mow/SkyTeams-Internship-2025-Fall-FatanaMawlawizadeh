/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 22. Print even numbers in a range 
    Description: Input start and end values, print all even numbers between them. 
    Example: 
    Input: 
    1, 10 
    Output: 
    2, 4, 6, 8, 10

*/

import { describe, it, expect} from "vitest";
import { fibonacciSeries } from "../src/question23";

describe("fibonacciSeries function prints numbers in fibonacci sequence", () => {
    it("Does not check unapplicable values", () => {
        expect(fibonacciSeries(null)).toBe("Insert a number");
        expect(fibonacciSeries(undefined)).toBe("Insert a number"); 
        expect(fibonacciSeries("Hello")).toBe("Insert a number");
    });
    it("Return fiboacii numbers in a sequence", () => {
        expect(fibonacciSeries(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        expect(fibonacciSeries(3)).toStrictEqual([0, 1, 1]);
        expect(fibonacciSeries(9)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    });
});