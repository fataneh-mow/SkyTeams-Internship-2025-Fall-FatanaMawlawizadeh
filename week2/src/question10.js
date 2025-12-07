/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question: Write a function to detect if a year is leap year or not     
    Description: Determine if a given year is a leap year. 
    Rule: Year divisible by 4 → leap year, except centuries not divisible by 400. 
    Example: 
    Input: 
    2000 
    Output: 
    Leap year 
    Input: 
    1900 
    Output: 
    Not leap year
*/

export function isLeapYear(year) {
    if (isNaN(Number(year)) || year === undefined || year === null) {
        throw new Error(`Error: Invalid input
        Make sure input is a year`);
    }

    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
};