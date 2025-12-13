/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 9th, 2025

    Question 20.Check Balanced Parentheses  
    Input: "{[()]}" → Output: Balanced 

*/

export function isBalance (parentheses) {
    if ( typeof parentheses !== "string" || parentheses === null || parentheses === undefined) {
        throw new Error(`Error: Invalid Input
        Make sure input is string`)
    }

    let stack = []

    let pairsMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for (let i = 0; i < parentheses.length; i++) {
        let char = parentheses[i]

        // for openings
        if (char === '(' || char === '{' || char === '[') {
            stack[stack.length] = char 
        }

        // for closings
        if (char === ')' || char === '}' || char === ']') {
            // if (stack.length === 0) {
            //     return false;
            // }

            let lastIndex = stack.length - 1; // taking the last index
            let value = stack[lastIndex]; // last index value
            stack.length = lastIndex; // poping it

            if (pairsMap[value] !== char) { // if last index of stack was equal to opening based on pairsMap then deletes it from stack
                return false;
            }
        }

    }
    return true;
}

console.log(isBalance("{[(]}"))