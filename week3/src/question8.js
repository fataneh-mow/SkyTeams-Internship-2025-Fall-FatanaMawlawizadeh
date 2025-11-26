/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 8. Write a function to check if an array contains a specific element 
    Description: Determine if a given element exists in the array. 
    Example: 
    Input: 
    Array = [3, 6, 9, 12], Element = 6 
    Output: 
    Found

*/

export function elementExist (list, e) {
    if (!Array.isArray(list) || list.length === 0 || typeof e !== "number") {
        throw new Error("Inputs must be array of numbers and a number");   
    }

    for (let item of list) {
        if (item === e) {
            return `Found`;
        }
    }

    return `Not-found`;
};

console.log(elementExist([1, 2], 2));