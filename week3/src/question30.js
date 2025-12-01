/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 29th, 2025 *

    Question 30. Find Missing Number in Array (1 to N) 
    Description: Given numbers from 1 to N with one missing, find the missing number. 
    Example: 
    Input: 
    [1, 2, 4, 5] 
    Output: 
    3

*/

export function missingNumber (arr) {
    if (!Array.isArray(arr) || arr === null || arr === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is Array`);
    }

    if (arr.length === 0) {
        throw new Error("Error: empty array is invalid");
    }

    let missing = [];
    let max = Math.max(...arr);
    for (let i = 1; i <= max; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
};