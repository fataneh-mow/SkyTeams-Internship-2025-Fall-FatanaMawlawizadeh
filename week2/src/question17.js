/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 17. Sum of first N natural numbers 
    Description: Calculate and print the sum using a loop. 
    Example: 
    Input: 
    5 
    Output: 
    15

 */

export function firstNumberSum (number) {

    let num = Number(number);

    if (isNaN(num)) {
        return `Insert a number`
    }

    let sum = 0;
    for (let i = 1; i <= num ; i++) {
        sum += i;
    }
    return sum;
};

console.log(firstNumberSum(5));