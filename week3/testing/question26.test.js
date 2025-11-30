/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 26. Convert Decimal to Binary 
    Description: Convert a decimal number to its binary representation. 
    Example: 
    Input: 
    10 
    Output: 
    1010

*/

import { describe, it, expect } from "vitest";
import { convertToBinary } from "../src/question26";

describe("convertToBinary converts a decimal number to binary", () => {
    it("throws error when the input doesn't be number", () => {
        const error = `Error: Invalid input
        Make sure the input is not
        String, Null, Undefined`

        const testCases = [null, undefined, NaN, "Hello"];

        testCases.forEach(test => {
            expect(() => convertToBinary(test)).toThrow(error);
        });
    });
    it("Converts any number to binary", () => {
        expect(convertToBinary(10)).toBe("1010");
        expect(convertToBinary(0)).toBe("0000");
        expect(convertToBinary(-10)).toBe("1010");
        expect(convertToBinary(255)).toBe("11111111");
        expect(convertToBinary(255 ** 1)).toBe("11111111");
        // expect(convertToBinary(3)).toBe("0011"); // how to convey zero at the begining of string?
    });
});