/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 7. Write a function to find the sum of all elements in an array 
    Description: Calculate the total sum of all array elements. 
    Example: 
    Input: 
    [1, 2, 3, 4, 5] 
    Output: 
    15

*/

export function arraySum (numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be an array that is not empty");   
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return `${numbers} sum is ${sum}`;
};