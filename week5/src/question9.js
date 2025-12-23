/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 20th, 2025 *

    Question 6. Remove Adjacent Duplicates 
    Problem: 
    Given a string s, repeatedly remove adjacent pairs of equal characters. 
    Example: 
    Input: "abbaca" 
    Output: "ca"

*/ 

import { Stack } from "./question5.js";

export function removeAdjacentDuplicates (str) {
    if (typeof str !== 'string' || str === null || str === undefined) {
        throw new Error(`Error: Invalid Input
        Make sure input is string`);
    }

    let stack = new Stack()

    for (let i = 0; i < str.length; i++) {
        let current = str[i]

         if (!stack.isEmpty() && stack.peek() === current) {
            stack.pop();
        } else {
            stack.push(current);
        }
    }
    return stack.printToArray().join('')
}

console.log(removeAdjacentDuplicates('abccc'))