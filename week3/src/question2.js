/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 2. Reverse a number 
    Description: Reverse the digits of a number. 
    Example: 
    Input: 
    1234 
    Output: 
    4321

*/

export function reverseNumber (number) {
    if (isNaN(number) || number === undefined || number === null) {
        throw new Error(`Error: Invalid Input
        Make sure your input is anything except the following
        String, Undefined, Null`);
    };

    let reversed = 0;
    let num = Math.abs(number);

    while (num > 0) {
        let finalDigit = num % 10;
        reversed = (reversed * 10) + finalDigit;
        num = Math.floor(num /10);
    }

    return Math.sign(number) * reversed;
};