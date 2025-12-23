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

import { Stack } from "./question5.js";

export class Queue {
    constructor () {
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
    }

    push (x) {
        this.stackOne.push(x)
        return this.stackOne
    }

    pop () {
        // transforming process of elements from stackOne to stackTwo
        if (this.stackTwo.isEmpty()) {
            while (!this.stackOne.isEmpty()) {
                this.stackTwo.push(this.stackOne.pop())
            }
        }
        return this.stackTwo.pop()
    }

    peek () {
        if (this.stackTwo.isEmpty) {
            while (!this.stackOne.isEmpty()) {
                this.stackTwo.push(this.stackOne.pop())
            }
        }

        return this.stackTwo.peek()
    }

    empty () {
        return this.stackOne.isEmpty() && this.stackTwo.isEmpty() 
    }

    printToArray() {
        const left = this.stackTwo.printToArray()
        const right = this.stackOne.printToArray().reverse()
        return left.concat(right)
    }
}


const myQ = new Queue()
console.log(myQ.push(12))
console.log(myQ.printToArray())

myQ.push(14)
myQ.push(16)
// myQ.push(18)

console.log(myQ)

myQ.pop()
console.log(myQ.printToArray())

// console.log(myQ.peek())
console.log(myQ.empty())

