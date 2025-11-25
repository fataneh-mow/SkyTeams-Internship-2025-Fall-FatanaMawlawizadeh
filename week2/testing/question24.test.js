/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 24. Find GCD of two numbers 
    Description: Compute the greatest common divisor using repeated subtraction or the Euclidean 
    algorithm. 
    Example: 
    Input: 
    12, 18 
    Output: 
    6
*/

import { describe, it, expect } from "vitest";
import { findGCD } from '../src/question24';

// describe("findGCD function finds the gratest common factor of two numbers using euclidean algorithm", () => {
//     it("Does not check for unapplicable inputs", () => {
//         expect(findGCD(12, undefined)).toBe("Insert only numbers");
//         expect(findGCD("abc", undefined)).toBe("Insert only numbers");
//     });
//     it("Finds GCD among positive numbers", () => {
   
// });

describe("findGCD function finds the gratest common factor of two numbers using euclidean algorithmfindGCD function finds the gratest common factor of two numbers using euclidean algorithm", () => {
    it("Does not check for unapplicable inputs", () => {
        expect(findGCD(12, undefined)).toBe("Input must be numbers");
        expect(findGCD("abc", undefined)).toBe("Input must be numbers");
        expect(findGCD("hello", 5)).toBe("Input must be numbers");
    });
    it("Finds GCD with positive numbers", () => {
        expect(findGCD(12, 18)).toBe("GCD of 12, 18 is 6");
        expect(findGCD(100, 80)).toBe("GCD of 100, 80 is 20");
        expect(findGCD(7, 5)).toBe("GCD of 7, 5 is 1");
        expect(findGCD(9, 9)).toBe("GCD of 9, 9 is 9");
        expect(findGCD(20, 100)).toBe("GCD of 20, 100 is 20");
    });
    it("Finds GCD with zero correctly", () => {
        expect(findGCD(0, 5)).toBe("GCD of 0, 5 is 5");
        expect(findGCD(12, 0)).toBe("GCD of 12, 0 is 12");
    });
});
