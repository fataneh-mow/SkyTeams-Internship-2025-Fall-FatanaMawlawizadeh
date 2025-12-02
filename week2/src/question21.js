/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 21. Sum of digits 
    Description: Calculate the sum of all digits of a number. 
    Example: 
    Input: 
    123 
    Output: 
    6

*/

export function digitsSum(number) {
    if (isNaN(Number(number)) || number === undefined || number === null) {
        return `Insert a number`;
    }

    const numStr = number.toString().replace(/\D/g, ''); // replace ==> to ignore decimal, negative and fraction signs, /\D/g (pattern- g finds anything inside the slash that is not digit,) , '' (replaces it which empty string)

    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }

    return `${number} sum is ${sum}`;
};
console.log(digitsSum(123));
console.log(digitsSum(1/2));
// console.log(1/2)
console.log(digitsSum(1.23)); // for all of these it's telling insert a number!