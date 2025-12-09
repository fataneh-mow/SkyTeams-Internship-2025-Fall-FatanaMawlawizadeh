/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 9th, 2025

    Question 18. Implement a Stack (Array-Based) 
    Operations: push, pop, peek, isEmpty.

*/

import { describe, it, expect, test } from "vitest";
import { push, pop, peek, isEmpty } from "../src/question18";

describe("push function pushes a value to the top of a stack", () => {
    it("Throws error when input is not valid", () => {
        const error = `Error: Invalid Input
        Make sure inputs are an array and a value to add`

        const testCaseForArray = []
        const testCases = [null, undefined]

        testCases.forEach(test => {
            expect(() => push(testCaseForArray, test)).toThrow(error)
        })
    });
    it("Throws error when stack is full, stack maximum is 5", () => {
        const error = `Error: Stack is full`

        expect(() => push([12, 13, 34, 56, 23], 100)).toThrow(error);
        expect(() => push([1, 17, 4, 5, 3], 10)).toThrow(error)
    });
    it("adds values to the top of stack", () => {
        const stackArr = [1, 2]
        
        expect(push([], 100)).toStrictEqual([100]);
        expect(push(stackArr, 100)).toStrictEqual([1, 2, 100]);
        expect(push(stackArr, 32)).toStrictEqual([1, 2, 100, 32]);
    });
});
describe("pop function removes one element from top of a stack", () => {
    it("Throws error when input is not array", () => {
        const error = `Error: Invalid Input
        Make sure input is array`

        const testCases = ["hello", null, undefined, 123]

        testCases.forEach(test => {
            expect(() => pop(test)).toThrow(error);
        })
    });
    it("Throws error when array's length is 0", () => {
        const error = `Error: Stack is empty`

        expect(() => pop([])).toThrow(error)
    });
    it("Removes elements from top of stack", () => {
        const stackArr = [1, 2, 3, 4, 56, 67]

        expect(pop(stackArr)).toStrictEqual([1, 2, 3, 4, 56]);
        expect(pop(stackArr)).toStrictEqual([1, 2, 3, 4]);
        expect(pop(stackArr)).toStrictEqual([1, 2, 3]);
    });
});
describe("peek function checks the element of top", () => {
    it("Throws error when input is not array", () => {
        const error = `Error: Invalid Input
        Make sure input is array`

        const testCases = ["hello", null, undefined, 123]

        testCases.forEach(test => {
            expect(() => pop(test)).toThrow(error);
        })
    });
    it("Throws error hen there is no element inside stack", () => {
        const error = `Error: Stack is empty`

        const stackArr = []
        expect(() => peek([])).toThrow(error);
        expect(() => peek(stackArr)).toThrow(error);
    });
    it("returns the last element which is on the top", () => {
        expect(peek([1, 2])).toBe(2);
        expect(peek([1, 2, 3])).toBe(3);
        expect(peek([1])).toBe(1);
    });
});
describe("isEmpty function checks if a stack is empty or not", () => {
    it("Throws error when input is not array", () => {
        const error = `Error: Invalid Input
        Make sure input is array`

        const testCases = ["hello", null, undefined, 123]

        testCases.forEach(test => {
            expect(() => pop(test)).toThrow(error);
        })
    });
    it("Reurns true or false", () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty([1, 2])).toBe(false);
        expect(isEmpty([null])).toBe(false);
    });
});