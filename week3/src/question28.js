/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 30. Remove Duplicates from an Array 
    Description: Remove duplicate elements efficiently from an array. 
    Example: 
    Input: 
    [3, 1, 3, 5, 1] 
    Output: 
    [3, 1, 5]

*/

export function removeDuplicates (array) {
    if (!Array.isArray(array) || array === null || array === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is Array`);
    }

    let resultArr = []

    if (array.length === 0) {
        throw new Error("Error: empty array is not valid");
    }

    for (let i = 0; i < array.length; i++) {
        let exist = resultArr.some(e => e === array[i])

        if (!exist) {
            resultArr.push(array[i]);
        }
    }

    return resultArr;
};