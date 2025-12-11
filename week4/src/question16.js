/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 16. Matrix Multiplication 
    Description: Multiply matrix A × B manually. 
    Example: 
    [[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]]

*/

export function matrixMultiplication (matrix1, matrix2) {
    if(!Array.isArray(matrix1) || matrix1 === null || matrix1 === undefined || 
       !Array.isArray(matrix2) || matrix2 === null || matrix2 === undefined) {
        throw new Error(`Invalid inputs
        Make sure your inputs are matrixes written in array format`);
    }

    if (matrix1.length !== 2 || matrix1[1].length !== 2 || matrix1[0].length !== 2 ) {
        throw new Error(`Matrixes must be equal in dimension to multiply`);
    }

    let result = [
        [0, 0],
        [0, 0]
    ]


    for (let i = 0; i < 2; i++) { // rows of matrix1
        for (let j = 0; j < 2; j++) { // columns of matrix2
            for (let k = 0; k < 2; k++) { //  multiplication process 
                result [i][j] += matrix1[i][k] * matrix2 [k][j]
            }
        }
    }
    
    return result
}

// let mat1 = [
//     [1, 2],
//     [2, 1]
// ]
// let mat2 = [
//     [0, 1],
//     [2, 3]
// ]

// console.log(matrixMultiplication(mat1, mat2))