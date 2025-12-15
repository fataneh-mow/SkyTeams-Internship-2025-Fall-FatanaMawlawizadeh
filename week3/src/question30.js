/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 29th, 2025 *

    Question 30. Find Missing Number in Array (1 to N) 
    Description: Given numbers from 1 to N with one missing, find the missing number. 
    Example: 
    Input: 
    [1, 2, 4, 5] 
    Output: 
    3

*/

export function missingNumber (arr) {
    if (!Array.isArray(arr) || arr === null || arr === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is Array`);
    }

    if (arr.length === 0) {
        throw new Error("Error: empty array is invalid");
    }

    let missing = 0;
    let max = arr.length ;

    for (let i = 1; i <= max; i++) {
        if (!arr.includes(i)) {
            missing = i;
        }
    }

    return missing;
};
console.log(missingNumber([1, 2, 3, 5])); // [2, 4, 5]


// let i = 1

// while (i <= max) {
//     if (!arr.includes(i)) {
//         missing.push(i)
//     }
//     i++
// }

// if (missing.length > 1) {
//     max = arr.length + 1
//     missing = []
//     i = 1

//     while (i <= max) {
//         if (!arr.includes(i)) {
//             missing.push(i)
//         }
//         i++
//     }

// }