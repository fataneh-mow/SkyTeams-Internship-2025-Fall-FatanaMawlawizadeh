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
        Make sure input is string`);
    }

    let result = true

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        
        for (let j = i + 1; j < str.length; j++) {
            if(char === str[j]) {
                return false
            }
        }
    }

    return result;
};

console.log(isUnique("hello"));
console.log(isUnique("apart"));
console.log(isUnique("helo"));

