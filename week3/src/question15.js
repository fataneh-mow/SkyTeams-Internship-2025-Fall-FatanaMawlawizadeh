/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 15. Check for Armstrong number 
    Description: A number is Armstrong if the sum of its digits raised to the power of the number of 
    digits equals the number itself. 
    Example: 
    Input: 
    153 
    Output: 
    Armstrong 
    Input: 
    123 
    Output: 
    Not Armstrong

*/

export function isArmstrong (number) {
    if (isNaN(Number(number)) || number === undefined || number === null) {
        throw new Error(`Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`);
    }

    number = Math.abs(Math.floor(number));

    let result = 0;
    let powerOfNumber = String(number).length;

    let temptNum = number;
    while (temptNum > 0) {

        let reaminder = temptNum % 10; // for having the last digit of number
        result += Math.pow(reaminder, powerOfNumber); // summing every digit powered to numbers length
        temptNum = Math.floor( temptNum / 10) // for taking the other digits
    }

    return result === number  ? "Armstrong" : "Not Armstrong";
};

console.log(isArmstrong(372));