/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to calculate the area and perimeter of a rectangle

    Example: 
    Input: 
    length = 4, width = 6 
    Output: 
    Area: 24, Perimeter: 20
*/

import {describe, it, expect} from "vitest";
import { recangleAreaPerimeter } from "../src/question3";

describe("recangleAreaPerimeter finds both area and perimeter using length and width", () => {
    it("Does not find area perimeter with inputs not number", () => {
        expect(() => recangleAreaPerimeter(12, undefined)).toThrow("Input must be numbers");
        expect(() => recangleAreaPerimeter(undefined, 10)).toThrow("Input must be numbers");
        expect(() => recangleAreaPerimeter()).toThrow("Input must be numbers");
        expect(() => recangleAreaPerimeter("hello")).toThrow("Input must be numbers");
    });
    it("finds area and perimeter with positive vlaues", () => {
        expect(recangleAreaPerimeter(12, 8)).toEqual({area: 96, perimeter: 40});
        expect(recangleAreaPerimeter(5, 10)).toEqual({area: 50, perimeter: 30});
        expect(recangleAreaPerimeter(7, 7)).toEqual({area: 49, perimeter: 28});
        expect(recangleAreaPerimeter(1, 2)).toEqual({area: 2, perimeter: 6});
        expect(recangleAreaPerimeter("1", 2)).toEqual({area: 2, perimeter: 24});
    });
    it("Does not find area and perimeter with one vlaue zero As an EDGE CASE", () => {
        expect(() => recangleAreaPerimeter(0, 5)).toThrow("Inputs can not be zero or less than");
        expect(() => recangleAreaPerimeter(0, 0)).toThrow("Inputs can not be zero or less than");
    });
    it("Does not find area and perimeter with negative numbers", () => {
        expect(() => recangleAreaPerimeter(-5, 10)).toThrow("Inputs can not be zero or less than");
        expect(() => recangleAreaPerimeter(-4, -3)).toThrow("Inputs can not be zero or less than");
    });
    it("finds area and perimeter with decimal numbers", () => {
        expect(recangleAreaPerimeter(2.5, 4.2)).toEqual({area: 10.5, perimeter: 13.4});
    });
    it("Does not find area and perimeter with string and number", () => {
        expect(() => recangleAreaPerimeter("hello", 2)).toThrow("Input must be numbers");
        expect(() => recangleAreaPerimeter("world", -3)).toThrow("Input must be numbers");
    });
    it("Does not find area and perimeter with missing parameter", () => {
        expect(() => recangleAreaPerimeter(2)).toThrow("Input must be numbers");
        expect(() => recangleAreaPerimeter(-3)).toThrow("Input must be numbers");
    });
});