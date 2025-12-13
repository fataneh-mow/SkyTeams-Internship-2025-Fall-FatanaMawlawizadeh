/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 9th, 2025

    Question 19. Implement a Queue Using Two Stacks

*/

export let stackOne = []
export let stackTwo = []

export function enqueue (item) {
    if (item === null || item === undefined || Array.isArray(item)) {
        throw new Error(`Error: Invalid input
        input must be string or number`);
    }

    stackOne[stackOne.length] = item;
    return stackOne
}

export function dequeue() {
    if (stackTwo.length === 0 && stackOne.length === 0) {
        throw new Error("Error: queue is empty");
    }

    if (stackTwo.length === 0) {
        // pop from stackOne and push what which is popped to stackTwo
        while (stackOne.length !== 0) {
            let lastIndex = stackOne.length - 1;  // getting last Index
            let value = stackOne[lastIndex];      // getting last element from stackOne by lastIndex
            stackOne.length = lastIndex;          // removing it
            stackTwo[stackTwo.length] = value;    // pushing it to stackTwo
        }
    }

    // pop from stackTwo then return the value as poped value
    let lastIndex = stackTwo.length - 1;
    let value = stackTwo[lastIndex];
    stackTwo.length = lastIndex;
    return value;
}

export function peek () {
    if (stackTwo.length === 0 && stackOne.length === 0) {
        throw new Error("Error: queue is empty");
    }

    if (stackTwo.length === 0) {
        while ( stackOne.length !== 0) {
            let lastIndex = stackOne.length - 1
            let value = stackOne[lastIndex]
            stackOne.length = lastIndex
            stackTwo[stackTwo.length] = value
        }
    }
    return stackTwo[stackTwo.length -1]
}

// console.log(enqueue(1))
// console.log(enqueue(2))
// console.log(peek())
// console.log(dequeue());
// console.log(dequeue());
