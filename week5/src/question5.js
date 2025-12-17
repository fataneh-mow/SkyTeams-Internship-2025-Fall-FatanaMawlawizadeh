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

    }
}




//  getMin (arr) {

//         let mainStack = new Stack()

//         for (let i = 0; i < arr.length; i++) {
//             mainStack.push(arr[i])

//         }

//         let minStack = new Stack()
//         let min;

//         while (mainStack.next === null) {
//             min = mainStack.top.value

//             if (min >= minStack.top.value) {
//                 minStack.push(mainStack.top.value)
//             }
//         }

//         let mainStackPeek = mainStack.peek()
//         let minStackPeek = minStack.peek()

//         if (mainStackPeek === minStackPeek) {
//             mainStack.pop()
//             minStack.pop()
//         }
//         return minStack
//     }


let stack = new Stack()

stack.push(12)
console.log(stack)

stack.pop()
console.log(stack)

stack.push(12)
stack.push(13)
console.log(stack.peek())


let emptyStack = new Stack()


console.log(emptyStack.getMin([10, 20]))