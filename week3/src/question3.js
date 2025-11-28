/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 3. Sum of digits of a number 
    Description: Calculate the sum of all digits in a given number. 
    Example: 
    Input: 
    12345 
    Output: 
    15 

*/

export function digitSum (digit) {
    if (isNaN(digit) || digit === undefined || digit === null) {
        throw new Error ("Insert number");
    };

    
    let sum = 0;
    let number = digit;
    while (number > 0) {
        let lastDigit = number % 10;
        sum += lastDigit;
        number = Math.floor(number/10);
    }

    return sum;
};

console.log(digitSum(12));
 // let digitStr = String(digit);

    // for (let i = 0; i < digitStr.length ; i++) {
    //     sum += Number(digitStr[i]);
    // };