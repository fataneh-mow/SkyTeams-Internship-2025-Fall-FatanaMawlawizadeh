/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 6. Binary Search Algorithm 
    Description: Implement binary search in a sorted array. 
    Example: 
    Input: [1, 3, 5, 7, 9], Target = 7 
    Output: Found at index 3

*/

export function findIndexOfTarget (arr, target) {
    if(!Array.isArray(arr) || target === undefined || target === null) {
        throw new Error(`Error: Invalid inputs
        Make sure you have entered an array and a target element`); 
    }

    let targetReached = "Not found";

    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            targetReached = i
            break;
        }
    }

    return targetReached;
};

console.log(findIndexOfTarget([1, 3, 4], 4)); // 2