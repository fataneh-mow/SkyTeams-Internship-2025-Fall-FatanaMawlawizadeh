/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 17. Pattern Printing – Right-angled Triangle 
    Example: 
    Input: 
    4 
    Output: 
    *   
    **   
    ***   
    ****
*/

import { describe, it, expect } from "vitest";
import { patternPrintingRightAngled } from "../src/question17";

describe("patternPrintingRightAhngled prints star like pattterns based on the given number 4 row and each row n(stars) based on n(row)", () => {
    it("Does not print when input is not valid", () => {
        
        const error = `Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`

        expect(() => patternPrintingRightAngled(null)).toThrow(error);
        expect(() => patternPrintingRightAngled(undefined)).toThrow(error);
        expect(() => patternPrintingRightAngled("hello")).toThrow(error);
    });
    it("Throws error when input is zero", () => {

        const error = "Input must not be zero";

        expect(() => patternPrintingRightAngled(0)).toThrow(error);
    });
    it("Prints pattern for every number type", () => {
        expect(patternPrintingRightAngled(3)).toBe("*\n**\n***");
        expect(patternPrintingRightAngled("-3")).toBe("*\n**\n***");
        expect(patternPrintingRightAngled("3.16")).toBe("*\n**\n***");
        expect(patternPrintingRightAngled(12/6)).toBe("*\n**");
        expect(patternPrintingRightAngled(4)).toBe("*\n**\n***\n****");
        expect(patternPrintingRightAngled(-16.67/4)).toBe("*\n**\n***\n****");
    });
});