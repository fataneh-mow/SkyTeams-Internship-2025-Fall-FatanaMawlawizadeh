/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 30th, 2025 *

    Question 24. Generate Pascal’s Triangle 
    Description: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows. 
    Example: 
    Input: 
    5 
    Output: 
     1 
    1 1 
   1 2 1 
  1 3 3 1 
 1 4 6 4 1

*/
// Function is not Complete !!!
export function pascalTriangle (rows) {
    if (isNaN(Number(rows)) || rows === null || rows === undefined) {
            throw new Error(`Error: Invalid Input
        Input must not be one of the following
        String, Undefined, Null`);
    }
    
    if (rows === 0) {
        throw new Error("Error: can't generate a pascal pyramid with zero rows");
    }

    let firstRow = "1";

    if (rows === 1) {
        return firstRow;
    }

    let previousRow = [];

    for (let i = 1; i <= rows; i++) {

        let rowMade = [];

        for (let j = 1; j <= 2 * i - 1; j++) {
            rowMade += j;
            // String(rowMade).padStart(rows - 1)
            // rowMade.push(previousRow);
        }    
        console.log(rowMade);
    }
    return rows // return for not facing undefined
};

console.log(pascalTriangle(4));