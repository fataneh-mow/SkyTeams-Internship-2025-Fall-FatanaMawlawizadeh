/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 4. Intersection of Two Arrays 
    Description: Return elements present in both arrays. 
    Example: 
    Input: [1, 2, 3, 4], [3, 4, 5, 6] 
    Output: [3, 4] 

*/

export function setIntersection (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error(`Error: Invalid Input
        Make sure input is two arrays`);
    }

    // using set
    // let arr1Set = new Set(arr1);
    // let arr2Set = new Set(arr2);

    // let intersection = arr1Set.intersection(arr2Set);
    // intersection = Array(intersection)

    let result = [];

    for(let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i])
            }
        }
    }
    return result;
};
console.log(setIntersection([1, 2], [34, 2, 56]));