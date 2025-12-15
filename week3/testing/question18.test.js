/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 18. Pattern Printing – Right-aligned Triangle 
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
import { patternPrintingLeftAngled } from "../src/question18";

describe("patternPrintingPyramid prints star like pattterns based on the given number 4 row and each row n(stars) based on n(row)", () => {
    it("Does not print when input is not valid", () => {
        
        const error = `Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`

        expect(() => patternPrintingLeftAngled(undefined)).toThrow(error);
        expect(() => patternPrintingLeftAngled("ABCD")).toThrow(error);
        expect(() => patternPrintingLeftAngled(null)).toThrow(error);
    });
    it("Throws error when input is zero", () => {

        const error = "Input must not be zero";

        expect(() => patternPrintingLeftAngled(0)).toThrow(error);
    });
    it("Prints pattern for every number type", () => {
        expect(patternPrintingLeftAngled(3)).toBe("  *\n **\n***");
        expect(patternPrintingLeftAngled("-3")).toBe("  *\n **\n***");
        expect(patternPrintingLeftAngled("3.16")).toBe("  *\n **\n***");
        expect(patternPrintingLeftAngled(12/6)).toBe(" *\n**");
        expect(patternPrintingLeftAngled(4)).toBe("   *\n  **\n ***\n****");
        expect(patternPrintingLeftAngled(-16.67/4)).toBe("   *\n  **\n ***\n****");
    });
});