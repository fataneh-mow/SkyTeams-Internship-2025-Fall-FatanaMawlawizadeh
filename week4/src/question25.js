/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 12th, 2025

    Question 25. Set Matrix Zeroes
    If an element is zero, set its entire row and column to zero.
    Follow-up: solve in constant extra space using the matrix itself as markers

*/

export function setMatrixeZeros (matrix) {
    if (!Array.isArray(matrix) || matrix === undefined || matrix === null) {
        throw new Error(`Error: Invalid Input
        Make sure input is an array of matrixes`);
    }

    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0
        }
    }

    return matrix
}

// let matrix = [
//     [2, 2],  // mtrix[i][j] 
//     [1, 0] // matrix[i][j]
// ]
