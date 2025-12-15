/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 6. Binary Search Algorithm 
    Description: Implement binary search in a sorted array. 
    Example: 
    Input: [1, 3, 5, 7, 9], Target = 7 
    Output: Found at index 3

*/

export function findIndexOfTargetWithBinary (arr, target) {
    if(!Array.isArray(arr) || target === undefined || target === null) {
        throw new Error(`Error: Invalid inputs
        Make sure you have entered an array and a target element`); 
    }

    let targetIndex = "Not found";
    
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === target) {
            targetIndex = middle;
            break;
        }
        else if (arr[middle] < target) {
            start = middle + 1
        }
        else {
            end = middle - 1;
        }
    }
    return targetIndex;
};

console.log(findIndexOfTargetWithBinary([1, 3, 12, 19, 10], 4)); // 2