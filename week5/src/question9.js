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
    let stackStr = new Stack()
    let removedDuplicates = []

    for (let i = 0; i < str.length; i++) {
        let current = str[i]

        if (stackStr.top === null) {
            stackStr.push(current)
        }
    }

    let stackStrPrinted = stackStr.printToArray()
    
    for (let char in stackStrPrinted) {
        if (removedDuplicates.length === 0) {
            // if ()
            removedDuplicates.push(char)
        }
    }

    return stackStr
}

console.log(removeAdjacentDuplicates('abc'))