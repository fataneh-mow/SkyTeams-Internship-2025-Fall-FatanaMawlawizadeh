/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 16th, 2025 *

    Question 1. Valid Parentheses 
    Problem: 
    Given a string containing only '(' , ')' , '{' , '}' , '[' , ']', determine if the string 
    is valid. 
    A valid string must have brackets closed in the correct order. 
    Example: 
    Input: s = "()[]{}" 
    Output: true 
    Input: s = "(]" 
    Output: false

*/
import { Queue } from "./question2.js";
import { Stack } from "./question3.js";

export function isStringValid (str) {
    if (typeof str !== 'string' || str === undefined || str === null) {
        throw new Error(`Error: Invalid Input
        Make sure input is string`);
    } 

    let queue = new Queue;

    for (let i = 0; i < str.length; i++) {
        queue.enqueue(str[i])
    }

    let pairs = {
        '(':')',
        '{':'}',
        '[':']'
    }

    let printed = queue.printToArray()

    let stack = new Stack()

    for (let i = 0; i < printed.length; i++) {
        if (printed[i] in pairs) {
            stack.push(printed[i])
        }
        else {
            if (stack.isEmpty()) {
                return false
            }

            // need to store the top value of pairs as a printed array then compare it,
            // since the pop function in stack class does not return the removed value

            let stackArray = stack.printToArray()
            let topValue = stackArray[stackArray.length - 1]

            stack.pop()

            if (pairs[topValue] !== printed[i]) {
                return false
            }
        }
    }
    // parenthese validation check
    return (stack.isEmpty())
}
console.log(isStringValid('[]'))