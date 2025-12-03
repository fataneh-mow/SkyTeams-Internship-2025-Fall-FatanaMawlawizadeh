/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 5.Rearrange Array (Even Before Odd) 
    Description: Move even numbers before odd numbers while maintaining order. 
    Example: 
    Input: [1, 2, 3, 4, 5, 6] 
    Output: [2, 4, 6, 1, 3, 5]

*/

export function reArrangeArrays (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error(`Error: Invalid Input
        Make sure input is two arrays`);
    }

    let arrays = arr1.concat(arr2);
    let result = [];
    let even = [];
    let odd = []

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] % 2 === 0) {
            even.push(arrays[i]);
        } else if ( arrays[i] % 2 === 1) {
            odd.push(arrays[i]);
        }
    }

    even = even.sort((a, b) => a - b);
    odd = odd.sort((a, b) => a - b);

    result = even.concat(odd);

    return result;
};