/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 4. Intersection of Two Arrays 
    Description: Return elements present in both arrays. 
    Example: 
    Input: [1, 2, 3, 4], [3, 4, 5, 6] 
    Output: [3, 4] 

*/
import { utilitiesInlcludes } from "../utilities/utilities.js";

export function setIntersection (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error(`Error: Invalid Input
        Make sure input is two arrays`);
    }

    let result = [];

    for(let i = 0; i < arr1.length; i++) {
        if (utilitiesInlcludes(arr2, arr1[i])) {
            if (!utilitiesInlcludes(result, arr1[i])) {
                    result.push(arr1[i])
            }
        }
    }
    return result;
};
console.log(setIntersection([1, 2, 2], [34, 2, 56])); // 2