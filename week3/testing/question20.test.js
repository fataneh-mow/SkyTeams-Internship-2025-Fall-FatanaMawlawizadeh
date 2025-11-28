/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 20. Body Mass Index (BMI) Calculator 
    Description: Given weight (kg) and height (m), calculate BMI using: 
    BMI = weight / (height * height) 
    Then categorize it into: 
    • Underweight: BMI < 18.5 
    • Normal weight: 18.5 ≤ BMI < 25 
    • Overweight: 25 ≤ BMI < 30 
    • Obese: BMI ≥ 30 
    Example: 
    Input: 
    70, 1.75 
    Output: 
    BMI = 22.86 (Normal weight)

*/

import { describe, it, expect } from "vitest";
import { findBMI } from "../src/question20";

describe("findBMI function finds Body Mass Index given weight and height", () => {
    it("Throws error when inputs don't be number", () => {

        const error = `Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`

        expect(() => findBMI()).toThrow(error);
        expect(() => findBMI(undefined)).toThrow(error);
        expect(() => findBMI(null)).toThrow(error);
        expect(() => findBMI("hello")).toThrow(error);
    });
    it("finds BMI of positive numbers only", () => {
        expect(findBMI(12, 1.45)).toBe("BMI = 5.71 (Underweight)");
        expect(findBMI(54, 1.59)).toBe("BMI = 21.36 (Normal weight)")
        expect(findBMI(70, 1.60)).toBe("BMI = 27.34 (Overweight)")
        expect(findBMI(87, 1.70)).toBe("BMI = 30.10 (Obese)")
    });
});