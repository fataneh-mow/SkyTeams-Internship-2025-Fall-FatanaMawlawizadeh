/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 30th, 2025 *

    Question 27. Find Unique Elements in an Array 
    Description: Return an array with only unique elements from the input array. 
    Example: 
    Input: 
    [1, 2, 2, 3, 4, 4, 5] 
    Output: 
    [1, 2, 3, 4, 5]

*/

import { describe, it, expect } from "vitest";
import { uniqueElements } from "../src/question27";

describe("uniqueElements fuction finds unique elements in array", () => {
    it("Throws error whrn input is not array", () => {
        const error = `Error: Invalid input
        Make sure input is Array`

        let testCases = [null, undefined, "Hello"];

        testCases.forEach(item => {
            expect(() => uniqueElements(item)).toThrow(error);
        });
    });
    it("Makes a new array including every elemnt one time", () => {
        expect(uniqueElements([1, 2, 3, 4, 4, 4])).toStrictEqual([1, 2, 3, 4]);
        expect(uniqueElements([1, 2, 2, 3, 4, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
        expect(uniqueElements(["😁", "😁", "😖"])).toStrictEqual(["😁", "😖"]);
        expect(uniqueElements(["A", "A", "B"])).toStrictEqual(["A", "B"]);
    });
});