/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 13. Power of a number (without built-in function) 
    Description: Compute a^b using repeated multiplication. 
    Example: 
    Input: 
    2, 5 
    Output: 
    32 

*/

export function toPower (base, power) {
    if(isNaN(Number(base)) || isNaN(Number(power)) || base === null || base === undefined || power === null || power === undefined) {
        throw new Error("Base and power must be numbers");
    }

    if (power <= 0) {
        throw new Error("power must be grater than zero");
    }

    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= base;
    }

    return result;
};