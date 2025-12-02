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
        expect(isLeapYear("hello")).toBe("hello is not checkable");
        expect(isLeapYear("hello1234")).toBe("hello1234 is not checkable");
        expect(isLeapYear(undefined)).toBe("undefined is not checkable");
    });
    it("Considers null as zero and techniacally returns that as a Leap Year", () => {
        expect(isLeapYear(null)).toBe("Leap Year");
    });
    it("Runs with positive numbers", () => {
        expect(isLeapYear(2000)).toBe("Leap Year");
        expect(isLeapYear(2024)).toBe("Leap Year");
        expect(isLeapYear(2023)).toBe("Not Leap Year");
        expect(isLeapYear(1900)).toBe("Not Leap Year");
    });
    it("Runs with negative numbers", () => {
        expect(isLeapYear(-4)).toBe("Leap Year");
        expect(isLeapYear(-100)).toBe("Not Leap Year");
    });
    it("Runs with numeric strings", () => {
        expect(isLeapYear("2020")).toBe("Leap Year");
    });
});