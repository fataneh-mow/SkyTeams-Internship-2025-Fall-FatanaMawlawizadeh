/**
    * Author: Fatana Mawlawizadeh
 
    * Date: Nov, 18th, 2025

    * Question: Write a function that swaps two values, without using a temp variable

    Example:
    Input: 
    3, 9, 5 
    Output: 
    Largest: 9, Smallest: 3
 */

import { minMax } from "../src/question2";
import { describe, it, expect, describe } from "vitest";

describe("minMax function finds the greatest and smallest number between three numbers", () => {
    it("finds min and max among positive numbers", () => {
        expect(minMax(1, 2, 3)).toEqual({max:3, min:1});
        expect(minMax(5, 5, 5)).toEqual({max:5, min:5});
    });
    it("finds min and max among two same numbers", () => {
        expect(minMax(3, 3, 7)).toEqual({max:7, min:3});
        expect(minMax(9, 2, 9)).toEqual({max:9, min:2});
    });
    it("finds min and max among positive and negative numbers", () => {
        expect(minMax(-1, 0, 9)).toEqual({max:9, min:-1});
        expect(minMax(-90, 43, 0)).toEqual({max:43, min:-90});
    });
    it("finds min and max among larger numbers", () => {
        expect(minMax(10000, -3, 200000)).toEqual({max: 200000, min: -3});
    });
    it("finds min and max among decimal numbers", () => {
        expect(minMax(1.2, 1.1, 1.3)).toEqual({max: 1.3, min: 1.1});
        expect(minMax(0.001, 0.0001, 0.01)).toEqual({max: 0.01, min: 0.0001});

    });
});
        // expect(minMax(-9, -1, -23)).toEqual({max:-1, min:-23}); // this one test fails!