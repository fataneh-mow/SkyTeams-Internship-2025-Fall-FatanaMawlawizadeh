/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to check wheteher a number is even or odd

    Description: Determine if a number is divisible by 2. 
    Example: 
    Input: 
    7 
    Output: 
    Odd
*/

export function typeNumber(input) {
    const num = Number(input);

    if (isNaN(num)) {
        return `${input} is not checkable`;
    }

    return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
};

