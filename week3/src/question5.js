/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 5. Write a function to find the largest element in an array 
    Description: Given an array of numbers, return the largest value. 
    Example: 
    Input: 
    [2, 8, 5, 3, 9] 
    Output: 
    9 

*/

export function greatestNum (numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be an array that is not empty");
    }
    
    let greatestNum = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > greatestNum) { 
            greatestNum = numbers[i]; } 
    } 
    
    return `${numbers} greatest number is ${greatestNum}`;
};