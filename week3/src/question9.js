/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 9. Write a function to count occurrences of an element in an array 
    Description: Count how many times a given number appears in the array. 
    Example: 
    Input: 
    Array = [2, 3, 2, 5, 2], Element = 2 
    Output: 
    3
*/

export function repitionCount (list, element) {
    if(!Array.isArray(list) || isNaN(Number(element)) || list === undefined || list === null || element === undefined || element === null) {
        throw new Error("Input must be a list as an array and an item as a number");
    };

    let count = 0;

    for (let i = 0; i < list.length; i++) {
        if (Number(element) === Number(list[i])) {
            count++;
        }
    }

    return `${element} repeated in this list ${count} times`;
};