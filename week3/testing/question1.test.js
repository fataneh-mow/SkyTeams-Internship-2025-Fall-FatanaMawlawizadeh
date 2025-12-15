/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 1. Count vowels in a string 
    Description: Count the number of vowels (a, e, i, o, u) in a given string. 
    Example: 
    Input: 
    "SkyTeams Internship" 
    Output: 
    6

*/

import { describe, it, expect } from "vitest";
import { vowelCount } from "../src/question1";

describe("voewlCount function counts number of vowels inside a string", () => {
    it("Does not count vowels if the input is not string", () => {
        expect(() => vowelCount(123)).toThrow("Input must be string");
        expect(() => vowelCount(null)).toThrow("Input must be string");
        expect(() => vowelCount(undefined)).toThrow("Input must be string");
    });
    it("Counts vowels inside a string", () => {
        expect(vowelCount("SkyTeams Internship")).toBe(5);
        expect(vowelCount("AIO")).toBe(3);
        expect(vowelCount("HelloGuys")).toBe(3);
        expect(vowelCount("I am an intern")).toBe(5);
        expect(vowelCount("[Hello]")).toBe(2);
        expect(vowelCount("[Hello Kitty]")).toBe(3);
    });
});