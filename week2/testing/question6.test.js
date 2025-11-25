/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to Compute Simple and Compound Interest

    Example: 
    Input: 
    3665 
    Output: 
    1 hr, 1 min, 5 sec 
*/

import { describe, it, expect } from "vitest";
import { convertTime } from "../src/question6";

describe("convertTime function converts time properly, it takes the total seconds as input and converts it", () => {
    it("coverts time with totalSecaond as positive number", () => {
        expect(convertTime(3600)).toBe("1:0:0");
        expect(convertTime(75)).toBe("0:1:15");
        expect(convertTime(7322)).toBe("2:2:2");
    });
    it("coverts time with totalSecaond as zero", () => {
        expect(convertTime(0)).toBe("0:0:0");
    });
    it("coverts time with totalSecaond as an edge case", () => {
        expect(convertTime(1)).toBe("0:0:1");
        expect(convertTime(8965.99)).toBe("2:29:25"); // ignoring decimals
    });
});