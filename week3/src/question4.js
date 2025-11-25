/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 4. Display all factors of a number 
    Description: Print all numbers that divide the given number exactly. 
    Example: 
    Input: 
    12 
    Output: 
    1, 2, 3, 4, 6, 12

*/

export function numFactors(number) {
    if (isNaN(Number(number)) || number === undefined || number === null) {
        throw new Error("Input must be number");
    };

    let factors = [];

    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    return `${number} factors are:${factors}`;
};