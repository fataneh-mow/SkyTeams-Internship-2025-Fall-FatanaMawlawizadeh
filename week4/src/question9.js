/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 9.String Compression 
    Description: Compress using counts of consecutive characters. 
    Example: 
    "aabcccccaaa" → "a2b1c5a3"

*/

export function stringCompression (str) {
    if (typeof str !== "string" || str === undefined || str === null) {
        throw new Error(`Error: Invalid Input
        Make sure your input is string`);
    }

    let count = 1;
    let resultStr = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        }
        else {
            resultStr.push(str[i]);
            resultStr.push(count);
            count = 1
        }
    }
    return resultStr.join('');
};
console.log(stringCompression("aabbc"));