/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 24. Find GCD of two numbers 
    Description: Compute the greatest common divisor using repeated subtraction or the Euclidean 
    algorithm. 
    Example: 
    Input: 
    12, 18 
    Output: 
    6
*/

export function findGCD (a, b) {
    const originalA = a;
    const originalB = b;

    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        return "Insert only numbers";
    }

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return `GCD of ${originalA}, ${originalB} is ${a}`;
};
