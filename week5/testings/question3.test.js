/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 16th, 2025 *

    Part 3 — Stack Basics Using Arrays or Linked Lists 
    1. Implement a Stack 
        • Use an array or linked list to create a stack class with push(x), pop(), top(), 
        isEmpty(), and size(). 
    2. Push and Pop 
        • Push [10, 20, 30] onto the stack, then pop 1 element. 
        • Print the stack after each operation. 
    3. Check if Stack is Empty 
        • Test the stack before and after adding items using isEmpty(). 
    4. Get Top Element 
        • Print the top element after pushing [5, 15, 25]. 
        • Pop and check the top again. 
    5. Reverse a Small Stack 
        • Reverse a stack [1, 2, 3] using a temporary stack or array. 
        • Print the reversed stack.

*/

import { describe, it, expect } from "vitest";
import { Node, Stack } from "../src/question3";

describe("Stack implemented linked list and its functions", () => {
    it("Pushes and pops one element from the top posiiton of a stack in a linked list node", () => {
        const myStack = new Stack()

        myStack.push(10)
        myStack.push(20)
        myStack.push(30)

        expect(myStack.printToArray()).toStrictEqual([30, 20, 10])

        myStack.pop()

        expect(myStack.printToArray()).toStrictEqual([20, 10])
    });

    it("isEmpty function checks if stack is empty or not", () => {
        const myStack = new Stack()

        expect(myStack.isEmpty()).toBe(true)

        myStack.push(12)

        expect(myStack.isEmpty()).toBe(false)
    });

    it("top function finds the top element", () => {
        const myStack = new Stack()

        myStack.push(12)

        expect(myStack.peek()).toBe(12)
    });

    it("size function finds the amount of linked nodes nased on value increment", () => {
        const myStack = new Stack()

        myStack.push(1)
        myStack.push(2)
        myStack.push(3)
        myStack.push(4)
        myStack.push(5)

        expect(myStack.size()).toBe(5)
    });

    it("reverse function reverses a stack nodes", () => {
        const myStack = new Stack()

        myStack.push(1)
        myStack.push(2)
        myStack.push(3)
        myStack.push(4)
        myStack.push(5)

        myStack.reverse()
        expect(myStack.printToArray()).toStrictEqual([5, 4, 3, 2, 1])
    });
});