/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 6. Write a function to find the smallest element in an array 
    Description: Find and return the smallest number in an array. 
    Example: 
    Input: 
    [4, 7, 1, 9, 2] 
    Output: 
    1

*/

export function smallestNum (numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be an array that is not empty");
    }
    
    let smallest = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) { 
            smallest = numbers[i]; } 
    } 
    
    return smallest;
};