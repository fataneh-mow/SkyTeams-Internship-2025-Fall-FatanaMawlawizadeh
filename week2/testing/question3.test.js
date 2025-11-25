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
import {areaPerimeter} from "../src/question3";

describe("areaPerimeter finds both area and perimeter using length and width", () => {
    it("Does not find area perimeter with inputs not number", () => {
        expect(areaPerimeter(12, undefined)).toEqual("Input must be numbers");
        expect(areaPerimeter(undefined, 10)).toEqual("Input must be numbers");
        expect(areaPerimeter()).toEqual("Input must be numbers");
        expect(areaPerimeter("hello")).toEqual("Input must be numbers");
        // expect(areaPerimeter("1)).toEqual("Input must be numbers");
    });
    it("finds area and perimeter with positive vlaues", () => {
        expect(areaPerimeter(12, 8)).toEqual({area: 96, perimeter: 40});
        expect(areaPerimeter(5, 10)).toEqual({area: 50, perimeter: 30});
        expect(areaPerimeter(7, 7)).toEqual({area: 49, perimeter: 28});
        expect(areaPerimeter(1, 2)).toEqual({area: 2, perimeter: 6});
        expect(areaPerimeter("1", 2)).toEqual({area: 2, perimeter: 6});
    });
    it("finds area and perimeter with one vlaue zero As an EDGE CASE", () => {
        expect(areaPerimeter(0, 5)).toEqual({area: 0, perimeter: 10});
        expect(areaPerimeter(0, 0)).toEqual({area: 0, perimeter: 0});
    });
    it("finds area and perimeter with negative numbers", () => {
        expect(areaPerimeter(-5, 10)).toEqual({area: -50, perimeter: 10});
        expect(areaPerimeter(-4, -3)).toEqual({area: 12, perimeter: -14});
    });
    it("finds area and perimeter with decimal numbers", () => {
        expect(areaPerimeter(2.5, 4.2)).toEqual({area: 10.5, perimeter: 13.4});
        expect(areaPerimeter(-4, -3)).toEqual({area: 12, perimeter: -14});
    });
    it("Does not find area and perimeter with string and number", () => {
        expect(areaPerimeter("hello", 2)).toEqual("Input must be numbers");
        expect(areaPerimeter("world", -3)).toEqual("Input must be numbers");
    });
    it("Does not find area and perimeter with missing parameter", () => {
        expect(areaPerimeter(2)).toEqual("Input must be numbers");
        expect(areaPerimeter(-3)).toEqual("Input must be numbers");
    });
});