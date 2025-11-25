/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question 13. Month name & number of days using switch-case 
    Description: Input a month number (1–12) and display its name and number of days. 
    Example: 
    Input: 
    2 
    Output: 
    February, 28 or 29 days
   
*/

import { describe, it, expect } from "vitest";
import { displayMonth } from "../src/question13";

describe("displayMonth displays date as you enter a month and the number of days it has", () => {
    it("Does not check for unapplicable numbers", () => {
        expect(displayMonth(-100)).toBe("Input must be between 1 to 12");
        expect(displayMonth("Hello")).toBe("Hello must be a number");
        expect(displayMonth("100")).toBe("Input must be between 1 to 12");
        expect(displayMonth(0)).toBe("Input must be between 1 to 12");
    });
    it("returns Month and the days it has", () => {
        expect(displayMonth(12)).toBe("December, 31 days");
        expect(displayMonth(9)).toBe("September, 30 days");
        expect(displayMonth(undefined)).toBe("undefined must be a number");
    });
});