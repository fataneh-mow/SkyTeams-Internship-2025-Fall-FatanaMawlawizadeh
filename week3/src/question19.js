/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 19. Pattern Printing – Pyramid 
    Example: 
    Input: 
    5 
    Output: 
        *   
       ***   
      *****   
     ******* 
    *********

*/

export function patternPrintingPyramid (number) {
    if (isNaN(Number(number)) || number === undefined || number === null) {
        throw new Error(`Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`)
    }

    if (number === 0) {
        throw new Error("Input must not be zero");
    }

    number = Math.abs(number); // for negatives
    number = Math.floor(number); // for decimals

    let result = [];

    for (let row = 1; row <= number; row++) {
        let str = "";

        let spacesLine = number - row;
        for (let space = 1; space <= spacesLine; space++) {
            str += " ";
        }

        let stars = 2 * row -1;
        for (let col = 1; col <= stars; col++) {
            str += "*";
        }
        result.push(str);
    }

    return result.join("\n");
};