/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question: Write a function to calculat grade (0–100 → A–F)      
    Description: Input a student’s marks (0–100) and print the grade based on a scale. 
    Example: 
    Input: 
    85 
    Output: 
    B 
*/

import { describe, it, expect } from "vitest";
import { calculateGrade } from "../src/question9";

describe("calculateGrade function detects if in which grade you are", () => {
    it("Does not check for non numeric values", () => {
        expect(calculateGrade("ball")).toBe("ball is not checkable");
        expect(calculateGrade({})).toBe("[object Object] is not checkable");
        expect(calculateGrade(undefined)).toBe("undefined is not checkable");
    });
    it("Does not check for the numbers out of range", () => {
        expect(calculateGrade(112)).toBe("112 is out of range");
        expect(calculateGrade(-10)).toBe("-10 is out of range");
    })
    it("Regards null as zero so it returns F", () => {
        expect(calculateGrade(null)).toBe("F");
    });
    it("Retunrs grades based on score ranges", () => {
        expect(calculateGrade(19)).toBe("F");
        expect(calculateGrade(0)).toBe("F");
        expect(calculateGrade(45)).toBe("C+");
        expect(calculateGrade(96)).toBe("A+");
        expect(calculateGrade(68.23)).toBe("B");
        expect(calculateGrade(40/2)).toBe("F");
    });
});