/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 30. Convert Decimal to Binary 
    Description: Convert a decimal number to its binary representation. 
    Example: 
    Input: 
    10 
    Output: 
    1010

*/

export function convertToBinary (number) {
    if (isNaN(Number(number)) || number === null || number === undefined) {
        throw new Error(`Error: Invalid input
        Make sure the input is not
        String, Null, Undefined`);
    }

    number = Math.abs(number);
    number = Math.floor(number);

    let result = 0;

    if ( number === 0) {
        result = "0000"
    }

    let i = 1
    let remainedr = 0;

    while (number > 0) {
        remainedr = number % 2;
        result += remainedr * i;
        i *= 10;
        number = Math.floor(number / 2);
    }

    return String(result);
};