/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 22. Collatz Sequence (Hailstone Numbers) 
    Description: 
    Take a number n. 
    • If n is even, divide it by 2. 
    • If n is odd, multiply it by 3 and add 1. 
    • Repeat until n = 1. 
    • Count the number of steps to reach 1. 
    Example: 
    Input: 
    6 
    Output: 
    6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)

*/

export function collatzSeries (number) {

    if (isNaN(Number(number)) || number === undefined || number === null) {
        throw new Error(`Error: Invalid input
        Make sure input is not one of the following:
        String, Undefined, Null`); 
    }
    if (number === 0) {
        throw new Error(`Error: Invalid number
        Make sure you don't enter zero`);
    }

    number = Math.abs(number);
    number = Math.floor(number);

    let result = [number];
    let steps = 0;

    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = (number * 3) + 1;
        }
        result.push(number);
        steps++;
    }
    return `${result} (stepes: ${steps})`;
};
console.log(collatzSeries(18/2));