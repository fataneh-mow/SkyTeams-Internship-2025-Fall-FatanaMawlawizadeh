/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 17th, 2025 *

    Question 3. Implement Queue Using Stacks 
    Problem: 
    Implement a queue using two stacks. 
    Operations: 
    • push(x) 
    • pop() → removes front 
    • peek() → returns front 
    • empty()     

*/

import { describe, it, expect } from "vitest";
import { Queue } from "../src/question6";

describe("Queue class is built up from two stacks, has push(x), pop(), peek(), and empty() functions", () => {
    it("push function pushes a value to tohe top position of stackOne", () => {
        const myQueue = new Queue()

        myQueue.push(1)
        myQueue.push(5)
        myQueue.push(10)

        expect(myQueue.printToArray()).toStrictEqual([1, 5, 10])
    });
    it("pop function removes an element from top after it's once added to stackTwo", () => {
        const myQueue = new Queue()

        myQueue.push(1)
        myQueue.push(5)
        myQueue.push(10)

        expect(myQueue.pop()).toBe(1)
    });
    it("peek function returns the top element after adding elements to stackTwo", () => {
        const myQueue = new Queue()

        myQueue.push(1)
        myQueue.push(5)
        myQueue.push(10)

        expect(myQueue.peek()).toBe(1)
    });
    it("empty function checks both top positions of stackOne and stackTwo and if one of them is empty returns false", () => {
        const myQueue = new Queue()

        myQueue.push(1)
        myQueue.push(5)
        myQueue.push(10)
        myQueue.pop()
        expect(myQueue.empty()).toBe(false)
    });
});