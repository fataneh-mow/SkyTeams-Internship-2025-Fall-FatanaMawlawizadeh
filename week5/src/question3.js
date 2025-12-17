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

export class Node {
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

    size () {
        let count = 0

        let current = this.top

        while (current) {
            count++
            current = current.next
        }
        return count
    }

    reverse () {
        let printed = this.printToArray()
        let reversed = []

        for (let i = printed.length -1; i >= 0; i--) {
            reversed.push(printed[i])
        }
        return reversed
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

// const myS = new Stack()

// console.log(myS.isEmpty())

// myS.push(12)

// console.log(myS)

// myS.push(13)
// myS.push(14)
// myS.push(15)

// console.log(myS.printToArray())

// myS.pop()
// console.log(myS.printToArray())

// console.log(myS.size())

// console.log(myS.peek())


// console.log(myS.reverse())