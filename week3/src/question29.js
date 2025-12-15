/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 30th, 2025 *

    Question 29. Check if Two Arrays Are Equal 
    Description: Compare two arrays and determine if they contain the same elements in the same 
    order. 
    Example: 
    Input: 
    [1, 2, 3], [1, 2, 3] 
    Output: 
    Equal 

*/

export function isArrayEqual (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) ||arr1 === null || arr1 === undefined || arr2 === null || arr1 === undefined) {
        throw new Error(`Error: Invalid inputs
        Make sure inputs are two arrays`);
    };

    if (arr1.length === 0 || arr2.length === 0) {
        throw new Error("Error: empty array is invalid");
    }

    if (arr1.length !== arr2.length) {
        return false;
    }
 
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true;
};