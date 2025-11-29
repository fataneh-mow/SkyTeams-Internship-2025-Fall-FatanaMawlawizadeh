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
import { printEven } from "../src/question22";

describe("printEven function prints even numbers of a given sequence", () => {
    it("Does not check unapplicable values", () => {
        expect(printEven(null, null)).toBe("Insert only numbers");
        expect(printEven(null, undefined)).toBe("Insert only numbers"); 
        expect(printEven(undefined, null)).toBe("Insert only numbers");
        expect(printEven("12", null)).toBe("Insert only numbers");
        expect(printEven("Hello", "k")).toBe("Insert only numbers");
    });
    it("Return even numbers inside a sequence", () => {
        expect(printEven(1, 10)).toStrictEqual([2, 4, 6, 8, 10]);
        expect(printEven(-1, 10)).toStrictEqual([0, 2, 4, 6, 8, 10]);
        expect(printEven(-20, 10)).toStrictEqual([-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
    })
});