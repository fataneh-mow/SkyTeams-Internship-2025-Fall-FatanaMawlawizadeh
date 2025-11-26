/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 10. Check whether a number is prime 
    Description: Determine if a number is divisible only by 1 and itself. 
    Example: 
    Input: 
    17 
    Output: 
    Prime 
    Input: 
    20 
    Output: 
    Not Prime

*/

export function isPrime(number) {
    if (isNaN(Number(number)) || number === null || number === undefined) {
        throw new Error("Input must be number");
    }

    if (number < 2) {
        throw new Error(`${number} is unchekable`);
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) return `Not Prime`;
    }

    return `Prime`;
};

console.log(isPrime(7))