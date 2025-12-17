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
        this.top = this.top.next
        return this.top
    }

    peek () {
        return this.top.value
    }

    getMin () {
        
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

let stack = new Stack()

stack.push(12)
console.log(stack)

stack.pop()
console.log(stack)

stack.push(12)
stack.push(13)
console.log(stack.peek())

// console.log()