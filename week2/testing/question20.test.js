/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 20. Count digits in a number 
    Description: Find how many digits are in a number. 
    Example: 
    Input: 
    786 
    Output: 
    3

*/

import { describe, it, expect } from "vitest";
import { digitCount} from "../src/question20";

describe("digitCount functions counts a digit's amount of numbers it has", () => {
    it("Does not check unapplicable inputs", () => {
        expect(digitCount(undefined)).toBe("Insert a number");
        expect(digitCount("Hello")).toBe("Insert a number");
        expect(digitCount(null)).toEqual("Insert a number");
        expect(digitCount("*")).toEqual("Insert a number");
    });
    it("Returns the number of digit based on abolute value", () => {
        expect(digitCount("1234")).toEqual("1234 has 4 digit");
        expect(digitCount(-345)).toEqual("345 has 3 digit"); // Math.abs(-345) ==> 345
        expect(digitCount(24)).toEqual("24 has 2 digit");
        expect(digitCount(123456789)).toEqual("123456789 has 9 digit");
    });
});