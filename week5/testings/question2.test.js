/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 16th, 2025 *

    Part 2 — Queue Basics Using Linked Lists 
    1. Implement a Queue 
        • Use a linked list to create a queue class with enqueue, dequeue, front, rear, isEmpty. 
    2. Enqueue and Dequeue 
        • Enqueue [10,20,30], dequeue 1 element, print the queue. 
    3. Check if Queue is Empty 
        • Test before and after enqueueing items. 
    4. Get Front and Rear Values 
        • Print the front and rear of a queue after adding [5,15,25]. 
    5. Reverse a Small Queue 
        • Reverse a queue [1,2,3] using a temporary stack/array

*/

import { describe, it, expect } from "vitest";
import { Node ,Queue } from "../src/question2.js"

describe("Implementation of queue using linked list and nodes, and some functions that are inside Queue class", () => {
    it("enqueue function inserts a value to a node at the end of a node of a linkedList", () => {
        let myQ = new Queue()

        myQ.enqueue(10)
        myQ.enqueue(20)
        myQ.enqueue(30)

        expect(myQ.printToArray()).toStrictEqual([10, 20, 30])
    });

    it("dequeu function removes from the front of a node", () => {
        const myQ = new Queue()

        myQ.enqueue(10)
        myQ.enqueue(20)
        myQ.enqueue(30)

        expect(myQ.printToArray()).toStrictEqual([10, 20, 30])
        
        myQ.dequeue()
        expect(myQ.printToArray()).toStrictEqual([20, 30])
    });

    it("isEmpty function checks if a queue's node vlaues are empty or not", () => {
        const myQ = new Queue()

        expect(myQ.isEmpty()).toBe(true)

        myQ.enqueue(10)

        expect(myQ.isEmpty()).toBe(false)
    });

    it("getFront returns the first value, getRear returns the last value", () => {
        const myQ = new Queue()

        myQ.enqueue(45)
        myQ.enqueue(23)
        myQ.enqueue(12)

        expect(myQ.getFront()).toBe(45)
        expect(myQ.getRear()).toBe(12)
    });
    
    it("Reverses queues", () => {
        const myQ = new Queue()

        myQ.enqueue(5)
        myQ.enqueue(15)
        myQ.enqueue(25)

        expect(myQ.reverse()).toStrictEqual([25, 15, 5])
    });
});