/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 1. Find Second Largest Number in an Array 
    Description: Find the second largest number without sorting the array. 
    Example: 
    Input: [10, 20, 4, 45, 99] 
    Output: 45

*/

export function secondLargest (arr) {
    if (!Array.isArray(arr) || arr === undefined || arr === null) {
        throw new Error(`Error: Invalid input
        Make sure you enter an array as input`);
    }

    let firstLargest = 0;
    let secondLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.abs(arr[i])
        arr[i] = Math.floor(arr[i])

        if (firstLargest < arr[i]) {
            secondLargest = firstLargest; 
            firstLargest = arr[i]
        } 
        else if (arr[i] < firstLargest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    } 

    return secondLargest;
};
// console.log(secondLargest([12, -45, 56]));
// console.log(secondLargest([12, -45]));