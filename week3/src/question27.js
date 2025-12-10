/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 30. Find Unique Elements in an Array 
    Description: Return an array with only unique elements from the input array. 
    Example: 
    Input: 
    [1, 2, 2, 3, 4, 4, 5] 
    Output: 
    [1, 2, 3, 4, 5]

*/

export function uniqueElements (array) {
    if (!Array.isArray(array) || array === null || array === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is Array`);
    }

    let uniqueArr = []

    if (array.length === 0) {
        uniqueArr = [];
    }

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArr.includes(array[i])) {
            uniqueArr.push(array[i]);
        }
    }

    return uniqueArr;
};