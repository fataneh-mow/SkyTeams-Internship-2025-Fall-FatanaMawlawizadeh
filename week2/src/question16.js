/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 16. Print numbers from 1 to 100 
    Description: Use a loop to print num\bers sequentially. 
    Example: 
    Output: 
    1, 2, 3, ..., 100

 */

export function printNumbers (from , to, ) {
    
    let a = Number(from);
    let z = Number(to);

    if (isNaN(a) || isNaN(z)) {
        return `Inputs must be numbers`
    }

    let sequence = [];

    for (let i = from; i <= to; i++) {
      sequence.push(i);
    }
    return sequence;
};