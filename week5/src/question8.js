/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 20th, 2025 *

    Question 5. Backspace String Compare 
    Problem: 
    Given two strings s and t, return true if they are equal after interpreting # as a backspace. 
    Example: 
    Input: "ab#c", "ad#c" 
    Output: true 
    Both become "ac"

*/ 
import { Stack } from './question5.js'

export function backspaceStringCompare (str1, str2) {
    if (
        typeof str1 !== 'string' || str1 === null || str1 === undefined ||
        typeof str2 !== 'string' || str2 === null || str2 === undefined
    ) {
        throw new Error(`Error: Invalid Inputs
        Make sure inputs are strings`);
    }

    let stackStr1 = new Stack()

    for (let i = 0; i < str1.length; i++) {
        let current = str1[i]

        if (current !== '#') {
            stackStr1.push(current)
        }

        if (current === '#') {
            while (stackStr1.top !== null) {
                stackStr1.pop()
            }
        }
    }

    let stackStr2 = new Stack()

    for (let i = 0; i < str2.length; i++) {
        let current = str2[i]

        if (current !== '#') {
            stackStr2.push(current)
        }

        if (current === '#') {
            while (stackStr2.top !== null) {
                stackStr2.pop()
            }
        }
    }


    let str1Printed = stackStr1.printToArray()
    let str2Printed = stackStr2.printToArray()


    let result;

    if (str1Printed.length === str2Printed.length) {
        for (let char1 in str1Printed) {
            for (let char2 in str2Printed) {
                if (char1 === char2) {
                    result = true
                    return result
                }
                else {
                    result = false
                    return result
                }
            }
        }
    }
    else {
        return false
    }
  
    return result;
}

console.log(backspaceStringCompare('ab#12', 'abcd#12'))