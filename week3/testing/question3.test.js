/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 3. Sum of digits of a number 
    Description: Calculate the sum of all digits in a given number. 
    Example: 
    Input: 
    12345 
    Output: 
    15 

*/

import { describe, it, expect } from "vitest";
import { digitSum } from "../src/question3";

describe("digitSum finds the sum of digits of a number", () => {
    it("Does not find the sum of inout that is not number", () => {
        expect(() => digitSum()).toThrow("Insert number");
    });
});