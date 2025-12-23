/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 14th, 2025 *

    Part 1 — Linked List Basics  
    1. Create a Singly Linked List 
        • Create a linked list with 3 nodes [10, 20, 30] and print all elements. 
    2. Add a Node at the Beginning 
        • Insert 5 at the start → [5,10,20,30]. 
    3. Add a Node at the End 
        • Append 40 → [5,10,20,30,40]. 
    4. Delete the First Node 
        • Remove head → [10,20,30,40]. 
    5. Search for a Value 
        • Check if 20 exists → return true/false.

*/

import { describe, it, expect } from "vitest";
import { printSinglyLinkedList ,createSinglyLinkedList, addNodeAtTheBeginning, addNodeAtTheEnd, deleteFirstNode, isSearchForValue } from "../src/question1";

describe("createSinglyLinkedList makes a singly linked list and prints it with a helper printer function ", () => {
    it("Throws error when one of three first elemnts are null or undefined", () => {
        const error = `Error: Invalid inputs
        Make sure inputs are not empty or undefined`

        const testCases = [null, undefined]

        testCases.forEach(test => {
            expect(() => printSinglyLinkedList(createSinglyLinkedList(test, test, test))).toThrow(error)
        })
    });
    it("createSinglyLinkedList creates a sinlgy linked list with three nodes", () => {
        expect(printSinglyLinkedList(createSinglyLinkedList(10, 20, 30))).toStrictEqual([10, 20, 30])
        expect(printSinglyLinkedList(createSinglyLinkedList("hello", 12, 30))).toStrictEqual(["hello", 12, 30])
    });
    
});

describe("addNodeAtTheBeginnig function adds a node at the beginning of a linked list", () => {
    it("Throws error when element is undefiend or null", () => {
        const error = `Error: Invalid input
        elemnt can't have a value of null or undefined`

        const testCases = [null, undefined]

        testCases.forEach(test => {
            expect(() => printSinglyLinkedList(addNodeAtTheBeginning(test, test))).toThrow(error)
        })
    });
    it("addNodeAtTheBeginning adds one more node at the beginning of linkedList", () => {
        let myLinked = createSinglyLinkedList(10, 20, 30)

        expect(printSinglyLinkedList(addNodeAtTheBeginning(myLinked, 5))).toStrictEqual([5, 10, 20, 30])
    });
});

describe("addNodeAtTheEnd function adds a node at the end of a head", () => {
    it("Throws error when the head or element of node are not specified", () => {
        const error = `Error: Invalid input
        elemnt can't have a value of null or undefined`

        const testCases = [null, undefined]

        testCases.forEach(test => {
            expect(() => printSinglyLinkedList(addNodeAtTheEnd(test, test))).toThrow(error)
        })
    });
    it("Adds new node at the end of a linked list", () => {
        let linkedList = createSinglyLinkedList(5, 10, 20)

        expect(printSinglyLinkedList(addNodeAtTheEnd(linkedList, 40))).toStrictEqual([5, 10, 20, 40])
    });
});

describe("deleteFirstNode function deletes the first node from a linked list", () => {
    it("Throws error when head is undefined or null", () => {
        const error = `Error: Invalid input
        head must not be null or undefined`

        const testCases = [null, undefined]

        testCases.forEach(test => {
            expect(() => printSinglyLinkedList(deleteFirstNode(test))).toThrow(error)
        })
    });
    it("Deletes the first node in a linked List", () => {
        let myLinkedList = createSinglyLinkedList(10, 20, 30)

        expect(printSinglyLinkedList(deleteFirstNode(myLinkedList))).toStrictEqual([20, 30])
    });
});

describe("isSearchForValue function checks if a valus is inside a linkedList or not", () => {
    it("Throws error when the inpurs are null or undefined", () => {
        const error = `Error: Invalid inputs
        inputs must not be null or undefined`

        const testCases = [null, undefined]

        testCases.forEach(test => {
            expect(() => isSearchForValue(test, test)).toThrow(error)
        })
    });
    it("checks if a value is avaliable inside a linked list and returns result as boolean values", () => {
        let myLinkedList = createSinglyLinkedList(10, 30, 40)

        expect(isSearchForValue(myLinkedList, 10)).toBe(true)
        expect(isSearchForValue(myLinkedList, 110)).toBe(false)
    })
});