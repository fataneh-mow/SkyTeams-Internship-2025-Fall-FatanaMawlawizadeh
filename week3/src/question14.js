/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 14. Find factorial of a number 
    Description: Compute N! using iterative approach. 
    Example: 
    Input: 
    5 
    Output: 
    120

*/

export function factorialNumber (number) {
    if (isNaN(Number(number)) || number === undefined || number === null) {
        throw new Error(`Error: Invalid input
        Make sure inout is not one of the following
        String, undefined, null`);
    }

    if (Number(number) === 0) {
        throw new Error(`Error: zero is not a valid number`);
    }

    number = Math.floor(number); // for having factorial number of deciaml numbers --> Edge case in testing  
    number = Math.abs(number); // for having factorial Number of negative numbers --> Edge case in testing

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= [i];
    }

    return result;
};