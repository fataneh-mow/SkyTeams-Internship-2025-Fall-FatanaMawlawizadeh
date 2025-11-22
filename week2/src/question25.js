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

import { findGCD } from './question24';

export function findLCM (a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return "Insert only numbers";
    };
    // LCM(a, b) = (a × b) / GCD(a, b) 
    const gcdString = findGCD(a, b);
    if (gcdString.includes("Insert only numbers")) return "Insert only numbers";

    const gcdValue = Number(gcdString.split(" is ")[1]);
    const lcmValue = Math.abs(a * b) / gcdValue; // absolute values is necessary for negative numbers

    return `LCM of ${a}, ${b} is ${lcmValue}`;
};