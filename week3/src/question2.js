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

export function reserveNumber (number) {
    if (isNaN(number) || number === undefined || number === null) {
        throw new Error("Insert number")
    };

    let numString = String(number);
    // numString = Math.abs(number);

    let reserved = "";
    for (let i = numString.length -1 ; i >= 0; i--) {
        reserved += numString[i];
    };

    return `${number} reserved is ${reserved}`;
};

try {
    console.log(reserveNumber());
} catch (error) {
    console.log("Insert only number");
}