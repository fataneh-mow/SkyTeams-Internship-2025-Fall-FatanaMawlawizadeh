/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to Determine if a number is positive, negative, or zero      
    Description: Use if-else statements to categorize a number. 
    Example: 
    Input: 
    -3 
    Output: 
    Negative
*/

export function numberSign (input) {
    const num = Number(input);

    if (isNaN(num)) {
        return `${input} is not checkable`;
    }

    if(num > 0) {
        return `${input} is positive`;
    } else if (num < 0) {
        return `${input} is negative`;
    } else {
        return `${input} is zero`;
    }
};