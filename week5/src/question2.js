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

export class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

export class Queue {
    constructor () {
        this.front = null
        this.rear = null
    }

    isEmpty () {
        return this.front === null
    }

    enqueue (value) {
        const newNode = new Node(value)

        if(this.isEmpty()) {
            this.front = newNode
            this.rear = newNode
        }
        else {
            this.rear.next = newNode
            this.rear = newNode
        }
        return newNode
    }

    dequeue () {
        if (this.isEmpty()) {
            return null
        }

        const removed = this.front.value
        this.front = this.front.next

        if (this.front === null) {
            this.rear = null
        }

        return removed
    }

    getFront () {
        return this.front.value
    }

    getRear () {
        return this.rear.value
    }

    reverse () {
        let reversed = []

        let printed = this.printToArray()

        for (let i = printed.length -1; i >= 0 ; i--) {
            reversed.push(printed[i])
        }

        return reversed
    }

    printToArray () {
        let result = []
        let current = this.front

        while (current !== null) {
            result.push(current.value)
            current = current.next
        }

        return result
    }
}

// const q = new Queue()

// console.log(q.isEmpty())

// q.enqueue(12)
// q.enqueue(14)

// console.log(q.printToArray())
// console.log(q.isEmpty())

// q.dequeue()
// console.log(q.printToArray())

// const q2 = new Queue()

// q2.enqueue(5)
// q2.enqueue(15)
// q2.enqueue(25)


// console.log(q2.getFront())
// console.log(q2.getRear())

// // q2.reverse()
// console.log(q2.reverse())