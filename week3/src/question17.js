/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 17. Pattern Printing – Right-angled Triangle 
    Example: 
    Input: 
    4 
    Output: 
    *   
    **   
    ***   
    ****
*/

export function patternPrintingRightAngled (number) {
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
        let strRow = "";

        for (let col = 1; col <= row; col++) {
            strRow += "*";
        }
        result.push(strRow);
    }

    return result.join("\n");
};