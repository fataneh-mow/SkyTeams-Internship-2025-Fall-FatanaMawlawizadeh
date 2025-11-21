/**
 * Author: Fatana Mawlawizadeh
 
 * Date: Nov, 13rd, 2025

 * Question: Write a function that swaps two values

 */

 export function swap (x, y) {
    let temporary = x;
    x = y;
    y = temporary;
    return [x, y];
}
