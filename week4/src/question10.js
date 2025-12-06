/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 10. Check Unique Characters 
    Description: Return whether a string contains only unique chars. 
    Example: 
    "hello" → Not Unique

*/

export function isUnique (str) {
    if (typeof str !== "string" || str === undefined || str === null) {
        throw new Error(`Error: Invalid Input
        Make sure inout is string`);
    }

    let result = true

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            result = false
        }
    }

    return result;
};

console.log(isUnique("helo"));