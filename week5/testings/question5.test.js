/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 17th, 2025 *

    Question 2. Min Stack 
    Problem: 
    Design a stack that supports: 
    • push(x) 
    • pop() 
    • top() 
    • getMin() → returns the minimum element in O(1)        

*/

import { describe, it, expect } from "vitest";
import { minStack } from "../src/question5";

describe("minStack class finds pushes, pops, peeks, and finds min value from a stack", () => {
    it("push(x) function pushes an element to a mainStack's top position, meanwhile pushes it if minStack is empty or if it is smller than the first element to minStack", () => {
        const myStack = new minStack()

        myStack.push(1)
        myStack.push(2)
        myStack.push(3)

        expect(myStack.printToArray()).toStrictEqual([3, 2, 1])
    });
    it("pop function removes the element located on the top", () => {
        const myStack = new minStack()

        myStack.push(10)
        myStack.push(20)
        myStack.push(30)

        expect(myStack.printToArray()).toStrictEqual([30, 20, 10])

        myStack.pop()

        expect(myStack.printToArray()).toStrictEqual([20, 10])
    });
    it("peek function returns the element located on mainStack top", () => {
        const myStack = new minStack()

        myStack.push(10)
        myStack.push(20)
        myStack.push(30)

        expect(myStack.peek()).toBe(30)
    });
    it("getMin function finds the minimumu stack amount", () => {
        const myStack = new minStack()

        myStack.push(10)
        myStack.push(20)
        myStack.push(30)

        expect(myStack.getMin()).toBe(10)
    });
});