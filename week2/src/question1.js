/**
 * Author: Fatana Mawlawizadeh
 
 * Date: Nov, 16th, 2025

 * Question: Write a function that swaps two values, without using a temp variable

 */

export function swapVariables (a, b) {
    let swapedd = [a, b] = [b,a];
    return swapedd;
}

let swaped = swapVariables(1,2);
console.log(swaped);
