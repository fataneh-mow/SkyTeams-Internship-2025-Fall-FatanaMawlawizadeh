/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 12th, 2025

    Question 24. K-th Largest Element
    Given an array of numbers and a value k, find the number that would appear in the k-th
    position if the array were sorted in descending order.

*/

import { describe, it, expect } from "vitest";
import { k_thLargestElement } from "../src/question24";

describe("k_thLargestElement finds the largest element as required as kPosition", () => {
    it("Throws error when the inout is not array and number", () => {
        const error = `Error: Invalid Input
        Make sure input is an array and a position of array's element`

        const testCases = [ null, undefined, "hello"] 

        testCases.forEach( test => {
            expect(() => k_thLargestElement(test, test)).toThrow(error)
        })
    });
    it("Throws error when the kPosition is bigger than array's length, or not avaliable", () => {
        const error = `Error: Invalid Position
        Make sure you are searching for an avaliable position`

        const arra = [1, 2, 3]
        expect(() => k_thLargestElement(arra, 9)).toThrow(error)
    });
    it("Finds the k-th position after array is sorted to decending order", () => {
        expect(k_thLargestElement([19, 998, 23], 3)).toBe(19)
        expect(k_thLargestElement([-18, 23, 12, 34], 4)).toBe(-18)
        expect(k_thLargestElement([13, 34, 21, 45, 92.65], 1)).toBe(92.65)
    });
});