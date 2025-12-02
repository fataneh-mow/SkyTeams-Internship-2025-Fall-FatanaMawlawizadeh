/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 16. Print numbers from 1 to 100 
    Description: Use a loop to print num\bers sequentially. 
    Example: 
    Output: 
    1, 2, 3, ..., 100

*/

import { describe, it, expect } from "vitest";
import { printNumbers } from "../src/question16";

describe("printNumbers function prints numbers in sequence properly", () => {
    it("Deos not print unapplicable values", () => {
        expect(printNumbers(undefined, 12)).toStrictEqual("Inputs must be numbers");
    });
    it("Properly works with the null value as of the start point", () => {
        expect(printNumbers(null, 12)).toStrictEqual([null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]);
    });
    it("Prints numbers in sequence properly", () => {
        expect(printNumbers(0, 12)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]);
        expect(printNumbers(-4, 12)).toStrictEqual([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]);
        expect(printNumbers(1, 100)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
    });
});