/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 25. Find LCM of two numbers 
    Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) / 
    GCD(a, b) 
    Example: 
    Input: 
    12, 18 
    Output: 
    36 

*/

import { findGCD } from './question23';

// export function findLCM (a, b) {
//     const num1 = Number(a);
//     const num2 = Number(b);

//     if (isNaN(num1) || isNaN(num2)) return "Insert only numbers";

//     const gcdString = findGCD(num1, num2);
//     if (gcdString.includes("Insert only numbers")) return "Insert only numbers";

//     const gcdValue = Number(gcdString.split(" is ")[1]);
//     const lcmValue = Math.abs(num1 * num2) / gcdValue;

//     return `LCM of ${num1}, ${num2} is ${lcmValue}`;
// };
//function has problem!!!