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
    it("Does not count vowels if he inout is not string", () => {
        expect(() => vowelCount(123)).toThrow("Input must be string");
        expect(() => vowelCount(null)).toThrow("Input must be string");
        expect(() => vowelCount(undefined)).toThrow("Input must be string");
    });
    it("Counts vowels inside a string", () => {
        expect(vowelCount("SkyTeams Internship")).toBe("SkyTeams Internship has 5 vowels");
        expect(vowelCount("AIO")).toBe("AIO has 3 vowels");
        expect(vowelCount("HelloGuys")).toBe("HelloGuys has 3 vowels");
        expect(vowelCount("I am an intern")).toBe("I am an intern has 5 vowels");
        expect(vowelCount("[Hello]")).toBe("[Hello] has 2 vowels");
        expect(vowelCount("[Hello Kitty]")).toBe("[Hello Kitty] has 3 vowels");
    });
});