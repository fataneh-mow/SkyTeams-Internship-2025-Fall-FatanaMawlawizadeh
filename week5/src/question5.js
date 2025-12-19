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

export class Node{
    constructor (value) {
        this.value = value
        this.next = null
    }
}

export class Stack {
    constructor () {
        this.top = null
    }

    isEmpty () {
        return this.top === null
    }

    push (value) {
        let newNode = new Node(value)

        newNode.next = this.top
        this.top = newNode

        return newNode
    }

    pop () {
        if (this.isEmpty()) return null
        const removed = this.top.value
        this.top = this.top.next
        return removed
    }

    peek () {
        return this.top.value
    }

    printToArray () {
        let result = []
        let current = this.top

        while (current !== null) {
            result.push(current.value)
            current = current.next
        }

        return result
    }
}

export class minStack {
    constructor () {
        this.mainStack = new Stack()
        this.minStack = new Stack()
    }

    push (x) {
        this.mainStack.push(x)
        if (this.minStack.isEmpty() || x <= this.minStack.peek()) {
            this.minStack.push(x)
        }
    }

    pop () {
        const removed = this.mainStack.pop()
        if (removed === this.minStack.peek()) {
            this.minStack.pop()
        }
        return removed
    }

    // peek would be the top element of mainStack
    peek () {
        return this.mainStack.peek()
    }

    // getMin would be the top element of minStack
    getMin () {
        return this.minStack.peek()
    }

    printToArray () {
        return this.mainStack.printToArray()
    }
}