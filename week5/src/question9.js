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
    let removedDuplicates = ''


    for (let i = 0; i < str.length; i++) {
        let current = str[i]

        stackStr.push(current)
    }

    let stackStrPrinted = stackStr.printToArray()
    
    for (let j = 0; j < stackStrPrinted.length; j++) {
        if (!utilitiesInlcludes(removedDuplicates, stackStrPrinted[j])) {
            removedDuplicates += (stackStrPrinted[j])
        }
    }

    removedDuplicates = utilitiesReverseString(removedDuplicates)
    return removedDuplicates
}

console.log(removeAdjacentDuplicates('abccc'))

function utilitiesInlcludes (str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            return true
        }
    }
    return false
}


function utilitiesReverseString (str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i] ;
    }

    return reversed
}