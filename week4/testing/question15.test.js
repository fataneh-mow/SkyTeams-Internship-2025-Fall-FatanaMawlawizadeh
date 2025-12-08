/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 15. Kadane’s Algorithm (Max Subarray Sum) 
    Example: 
    [-2,1,-3,4,-1,2,1,-5,4] → 6

*/

import { describe, it, expect } from "vitest";
import { KadaneAlgorithmMaxSubarraySum } from "../src/question15";

describe("KadaneAlgorithmMaxSubarraySum uses kadane's algorithm for finding max of subarray sum", () => {
    it("Throws error when input is not array", () => {
        const error = `Error: Invalid input
        Make sure input is an array`

        const testCases = [123, null, undefined, "hello"];

        testCases.forEach(test => {
            expect(() => KadaneAlgorithmMaxSubarraySum(test)).toThrow(error);
        })
    });
    it("Finds the maximum in a sub array", () => {
        expect(KadaneAlgorithmMaxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
        expect(KadaneAlgorithmMaxSubarraySum([-2, -3, -7, -2, -10, -4])).toBe(-2);
        expect(KadaneAlgorithmMaxSubarraySum([7, 5, -1, -6, 7, 4, 2, 3])).toBe(21);
        expect(KadaneAlgorithmMaxSubarraySum([1, 2, -4, 3, 4, -2])).toBe(7);
    });
});