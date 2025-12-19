/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 17th, 2025 *

    Question 4. Evaluate Reverse Polish Notation (RPN) 
    Problem: 
    Evaluate an expression in Reverse Polish Notation. 
    Valid operators: + - * /. 
    Example: 
    Input: ["2","1","+","3","*"] 
    Output: 9 
    Explanation: (2 + 1) * 3 

*/
import { Stack } from "./question5.js"

export function reversePolishNotation (arr) {
    if (!Array.isArray(arr) || arr === undefined || arr === null || arr.length === 0) {
        throw new Error(`Error: Invalid input
        Make sure input is an array of numbers and oprators`);
    }

    let stack = new Stack()
    let result

    for (let i = 0; i <arr.length; i++) {
        let num = arr[i]

        if (!isNaN(Number(num))) {
            stack.push(Number(num))
        }

        else {
            let b = stack.pop()
            let a = stack.pop()

            if (num === '+') {
                result = a + b
            }
            else if (num === '-') {
                result = a - b
            }
            else if (num === '*') {
                result = a * b
            }
            else if (num === '/') {
                result = a / b
            }

            stack.push(result)
        }

    }

    return stack.pop()
}

console.log(reversePolishNotation(['1','2', '+']))