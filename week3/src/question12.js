/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 12. Check for palindrome number 
    Description: Check if a number reads the same backward and forward. 
    Example: 
    Input: 
    121 
    Output: 
    Palindrome 
    Input: 
    123 
    Output: 
    Not Palindrome

*/
import { reverseNumber } from "./question2.js"

export function isPalindrome (number) {
    if(isNaN(Number(number)) || number === null || number === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is number`);
    }

    number = Math.abs(number)
    number = Math.floor(number);

    return Number(reverseNumber(number)) === number;;
};