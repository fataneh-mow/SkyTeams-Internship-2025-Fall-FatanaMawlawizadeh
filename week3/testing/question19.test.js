/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 19. Pattern Printing – Pyramid 
    Example: 
    Input: 
    5 
    Output: 
        *   
       ***   
      *****   
     ******* 
    *********

*/

import { describe, it, expect } from "vitest";
import { patternPrintingPyramid } from "../src/question19";

describe("patternPrintingPyramid prints star like pattterns based on the given number 4 row and each row n(stars) based on n(row)", () => {
    it("Does not print when input is not valid", () => {
        
        const error = `Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`

        expect(() => patternPrintingPyramid(undefined)).toThrow(error);
        expect(() => patternPrintingPyramid("ABCD")).toThrow(error);
        expect(() => patternPrintingPyramid(null)).toThrow(error);
    });
    it("Throws error when input is zero", () => {

        const error = "Input must not be zero";

        expect(() => patternPrintingPyramid(0)).toThrow(error);
    });
    it("Prints pattern for every number type", () => {
        expect(patternPrintingPyramid(5)).toBe(
            "    *\n" +
            "   ***\n" +
            "  *****\n" +
            " *******\n" +
            "*********"
        );
        expect(patternPrintingPyramid(-5)).toBe(
            "    *\n" +
            "   ***\n" +
            "  *****\n" +
            " *******\n" +
            "*********"
        );
        expect(patternPrintingPyramid(-5.99)).toBe(
            "    *\n" +
            "   ***\n" +
            "  *****\n" +
            " *******\n" +
            "*********"
        );
        expect(patternPrintingPyramid(5/1)).toBe(
            "    *\n" +
            "   ***\n" +
            "  *****\n" +
            " *******\n" +
            "*********"
        );
        expect(patternPrintingPyramid(-5.2/1)).toBe(
            "    *\n" +
            "   ***\n" +
            "  *****\n" +
            " *******\n" +
            "*********"
        );
    });
});