/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 15. Check for Armstrong number 
    Description: A number is Armstrong if the sum of its digits raised to the power of the number of 
    digits equals the number itself. 
    Example: 
    Input: 
    153 
    Output: 
    Armstrong 
    Input: 
    123 
    Output: 
    Not Armstrong

*/

import { describe, it, expect } from "vitest";
import { isArmstrong } from "../src/question15";

describe("isArmstrong function checks if a number is armstrong or not", () => {
    it("Throws error wehn the input doesn't be number", () => {
        const error = `Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`

        expect(() => isArmstrong(null)).toThrow(error);
        expect(() => isArmstrong(undefined)).toThrow(error);
        expect(() => isArmstrong("hello")).toThrow(error);
        expect(() => isArmstrong()).toThrow(error);
    });
    it("Finds if a number is armstrong or not, works with -> zero, positive numbers, negative numbers, decimal numbers and fractional numbers", () => {
        const trueCase = "Armstrong";
        const falseCase = "Not Armstrong";

        expect(isArmstrong(10)).toBe(falseCase);
        expect(isArmstrong(153)).toBe(trueCase);
        expect(isArmstrong(0)).toBe(trueCase);
        expect(isArmstrong(-1)).toBe(trueCase);
        expect(isArmstrong(9/3)).toBe(trueCase);
        expect(isArmstrong(4.001)).toBe(trueCase);
        expect(isArmstrong(12.5)).toBe(falseCase);
        expect(isArmstrong(132)).toBe(falseCase);
        expect(isArmstrong(400/234)).toBe(trueCase);
        expect(isArmstrong(67.99)).toBe(falseCase);
    });
});