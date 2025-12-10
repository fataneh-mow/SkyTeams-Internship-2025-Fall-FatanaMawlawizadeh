/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 5.Rearrange Array (Even Before Odd) 
    Description: Move even numbers before odd numbers while maintaining order. 
    Example: 
    Input: [1, 2, 3, 4, 5, 6] 
    Output: [2, 4, 6, 1, 3, 5]

*/
import { utilitiesConcat, utilitiesSortMinToMax } from "../utilities/utilities.js";

export function rearrangeArrays (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error(`Error: Invalid Input
        Make sure input is two arrays`);
    }

    let arrays = utilitiesConcat(arr1, arr2);
    let result = [];
    let even = [];
    let odd = []

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] % 2 === 0) {
            even.push(arrays[i]);
        } else {
            odd.push(arrays[i]);
        }
    }

    even = utilitiesSortMinToMax(even);
    odd = utilitiesSortMinToMax(odd);

    result = utilitiesConcat(even ,odd);

    return result;
};

console.log(rearrangeArrays([3, 2, 1], [6, 5, 4]))