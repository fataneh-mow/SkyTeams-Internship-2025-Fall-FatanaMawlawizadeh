/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 9th, 2025

    Question 19. Implement a Queue Using Two Stacks

*/

import { describe, it, expect } from "vitest";
import { dequeue, enqueue, peek, stackOne, stackTwo} from "../src/question19";

describe("enqueue function pushes an item to stackOne", () => {
    it("Throws error when input is not number or string", () => {
        const error = `Error: Invalid input
        input must be string or number`

        const testCases = [null, undefined, []];

        testCases.forEach(test => {
            expect(() => enqueue(test)).toThrow(error)
        })
    });
    it("enqueues the input given to stackOne variable", () => {
        // let stackOne = []

        expect(enqueue(12)).toStrictEqual([12])
        expect(enqueue(14)).toStrictEqual([12, 14])
        expect(enqueue(15)).toStrictEqual([12, 14, 15])
    });
});
describe("dequeue function removes the last element of stackOne by putting it inside stackTwo", () => {
    it("Throws error when the stack 2 and stack 1 are both empty", () => {
        stackOne.length = 0;
        stackTwo.length = 0;

        const error = `Error: queue is empty`

        expect(() => dequeue()).toThrow(error)
    });
    it("dequeues last element of stackTwo, returns dequeued element", () => {
        stackOne.length = 0;
        stackTwo.length = 0;

        enqueue(5)
        enqueue(10)

        expect(dequeue()).toStrictEqual(5)
    });
});
describe("peek function shows he last element inide stackTwo", () => {
    it("Throws error when both stacks are empty", () => {
        stackOne.length = 0;
        stackTwo.length = 0;

        const error = `Error: queue is empty`

        expect(() => peek()).toThrow(error)
    });
    it("Shows the last item inside stackTwo", () => {
        stackOne.length = 0;
        stackTwo.length = 0;

        enqueue(5)
        enqueue(10)

        expect(peek()).toStrictEqual(5)
    });
});