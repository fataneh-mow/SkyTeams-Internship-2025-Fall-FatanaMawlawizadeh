/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 15. Triangle validity and type 
    Description: Given three sides, determine if they form a valid triangle and if it’s equilateral, 
    isosceles, or scalene. 
    Rule: Sum of any two sides > third side. 
    Example: 
    Input: 
    3, 4, 5 
    Output: 
    Valid triangle, Scalene

 */

import { describe, it, expect } from "vitest";
import { triangleValidityAndType } from "../src/question15";

describe("triangleValidiyAndType first finds if the triangle is valid as triangle then specifies it's type", () => {
    it("Does not accept unapplicable values", () => {
        expect(triangleValidityAndType(1, 2, "x")).toBe("Sides must be numbers");
        expect(triangleValidityAndType(1, 2, undefined)).toBe("Sides must be numbers");
        expect(triangleValidityAndType(0.5, 0.5)).toBe("Sides must be numbers");
    });
    it("Does not working with invalid triangles", () => {
        expect(triangleValidityAndType(1, 2, "6")).toBe("Invalid triangle");
        expect(triangleValidityAndType(1, 2, null)).toBe("Invalid triangle");
        expect(triangleValidityAndType(-3, 4, 5)).toBe("Invalid triangle");
    });
    it("Specifies triangle type after it's valid", () => {
        expect(triangleValidityAndType(3, 3, 5)).toBe("Valid triangle, Isosceles");
        expect(triangleValidityAndType(6, 6, 6)).toBe("Valid triangle, Equilateral");
        expect(triangleValidityAndType(3, 4, 5)).toBe("Valid triangle, Scalene");
        expect(triangleValidityAndType(0.5, 0.5, 0.5)).toBe("Valid triangle, Equilateral");
    });
});