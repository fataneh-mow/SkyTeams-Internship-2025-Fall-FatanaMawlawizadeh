/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 20. Count digits in a number 
    Description: Find how many digits are in a number. 
    Example: 
    Input: 
    786 
    Output: 
    3

*/

export function digitCount(num) {
    if (isNaN(Number(num)) || num === undefined || num === null) {
        return `Insert a number`;
    }

    num = String(Math.abs(num));

    let count = 0;

    for (let i = 0; i < num.length; i++) {
        count++;
    }

    return `${num} has ${count} digit`;
}
console.log(digitCount(0));