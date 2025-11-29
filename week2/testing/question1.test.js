/**
    * Author: Fatana Mawlawizadeh
 
    * Date: Nov, 18th, 2025

    * Question: Write a function that swaps two values, without using a temp variable

    Example:
    Input:
    a = 5, b = 10
    Output:
    a = 10, b = 5

 */
import { swapVariables } from "../src/question1";
import { it, describe, expect } from "vitest";

describe("swapVariables function swaps two variables", () => {
    it("swapping two variabels", () => {
        expect(swapVariables("Hello", "world")).toEqual(["world", "Hello"]);
        expect(swapVariables("Apple", 10)).toEqual([10, "Apple"]);
        expect(swapVariables(-10, 10)).toEqual([10, -10]);
        expect(swapVariables("a", "a")).toEqual(["a", "a"]);
    });
    it("swapping two arrays", () => {
        expect(swapVariables([1, 2, 3, 4, 5], [])).toEqual([[], [1, 2, 3, 4, 5]]);
    });
    it("swapping two objects", () => {
        expect(swapVariables({x:1, y:2}, {z:3})).toEqual([{z:3}, {x:1, y:2}]);
    });
    it("swapping undefined and null", () => {
        expect(swapVariables(null, undefined)).toEqual([undefined, null]);
    });
});