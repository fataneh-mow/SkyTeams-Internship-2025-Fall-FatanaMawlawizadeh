/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question 11:  Simple Calculator using switch-case 
    Description: Input two numbers and an operator (+, -, *, /) and compute the result. 
    Example: 
    Input: 
    5, 3, + 
    Output: 
    8     
   
*/

import { describe, it, expect } from "vitest";
import { calculate } from "../src/question11";

describe("calulate function does these four operations +, -, *, /", () => {
    it("Does not check for unapplicable numbers", () =>{
        expect(calculate(12, "Hello", "*")).toBe("12 and Hello are not applicable");
        expect(calculate(12, undefined, "*")).toBe("12 and undefined are not applicable");
    });
    it("Regards null as zero", () =>{
        expect(calculate(12, null, "*")).toBe(0);
    });
    it("Returns values properly", () =>{
        expect(calculate(5, 3, "+")).toBe(8);
        expect(calculate("10", "20", "+")).toBe(30);
        expect(calculate(10, 4, "-")).toBe(6);
        expect(calculate(6, 7, "*")).toBe(42);
        expect(calculate(10, 2, "/")).toBe(5);
        expect(calculate(7, 2, "/")).toBe(4);
        expect(calculate(0.1, 0.2, "+")).toBeCloseTo(0.3);
        expect(calculate(1000000, 2000000, "+")).toBe(3000000);
    });
    it("Does not devide numbers by zero", () =>{
        expect(calculate(10, 0, "/")).toBe("0 must not be zero");
    });
    it("Does not operate while operator be rather than +, -, /, *", () =>{
        expect(calculate(5, 5, "%")).toBe("% is not included yet!");
        expect(calculate(9, 3, "^")).toBe("^ is not included yet!");
        expect(calculate(10, 5)).toBe("undefined is not included yet!");
    });
    it("Works properly with negative numbers", () =>{
        expect(calculate(-5, 3, "+")).toBe(-2);
    });
});