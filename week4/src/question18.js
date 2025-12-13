/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 9th, 2025

    Question 18. Implement a Stack (Array-Based) 
    Operations: push, pop, peek, isEmpty.

*/

let stack = [1, 2, 3]

export function push (arr, value) {
    if (!Array.isArray(arr) || arr === null || arr === undefined || value === undefined || value === null) {
        throw new Error(`Error: Invalid Input
        Make sure inputs are an array and a value to add`);
    }
    if (arr.length === 5) {
        throw new Error(`Error: Stack is full`);
    }

    arr[ arr.length ] = value // technically arr.length is the next elemnt of array, it's demonstrating to the next index
    return arr
}

export function pop (arr) {
    if (!Array.isArray(arr) || arr === null || arr === undefined) {
        throw new Error(`Error: Invalid Input
        Make sure input is array`);
    }
    if (arr.length === 0) {
        throw new Error(`Error: Stack is empty`);
    }

    let lastIndex = arr.length - 1;

    let removedItem = arr[lastIndex];
    arr.length = lastIndex // removing last index

    return arr
}

export function peek (arr) {
    if (!Array.isArray(arr) || arr === null || arr === undefined) {
        throw new Error(`Error: Invalid Input
        Make sure input is array`);
    }
    if (arr.length === 0) {
        throw new Error(`Error: Stack is empty`);
    }

    let lastIndex = arr[ arr.length - 1 ] 

    return lastIndex;
}

export function isEmpty (arr) {
    if (!Array.isArray(arr) || arr === null || arr === undefined) {
        throw new Error(`Error: Invalid Input
        Make sure input is array`);
    }
    return arr.length === 0
}
