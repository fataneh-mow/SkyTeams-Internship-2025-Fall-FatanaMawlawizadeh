/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question: Write a function to detect if a year is leap year or not     
    Description: Determine if a given year is a leap year. 
    Rule: Year divisible by 4 → leap year, except centuries not divisible by 400. 
    Example: 
    Input: 
    2000 
    Output: 
    Leap year 
    Input: 
    1900 
    Output: 
    Not leap year
*/

import { describe, it, expect } from "vitest";
import { isLeapYear } from "../src/question10";

describe("isLeapYear checks if a year is Leap year or not", () => {
    it("Does not check for numbers not qualified", () => {
        const error = `Error: Invalid input
        Make sure input is a year`

        const testCases = [null, undefined, "hello"];

        testCases.forEach(test => {
            expect(() => isLeapYear(test)).toThrow(error);
        });
    });
    it("Runs with positive numbers", () => {
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear(2024)).toBe(true);
        expect(isLeapYear(2023)).toBe(false);
        expect(isLeapYear(1900)).toBe(false);
    });
    it("Runs with negative numbers", () => {
        expect(isLeapYear(-4)).toBe(true);
        expect(isLeapYear(-100)).toBe(false);
    });
    it("Runs with numeric strings", () => {
        expect(isLeapYear("2020")).toBe(true);
    });
});