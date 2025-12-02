/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 18. Multiplication table of a number 
    Description: Print the multiplication table for a given number (up to 10 or N). 
    Example: 
    Input: 
    5 
    Output: 
    5 × 1 = 5 
    5 × 2 = 10 
    ... 
    5 × 10 = 50

*/

export function multiplication (number) {

    let num = Number(number);

    if (isNaN(num)) {
        return `Insert a number`
    }

    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${number} × ${i} = ${number * i}\n`;
    }

    return result;
};