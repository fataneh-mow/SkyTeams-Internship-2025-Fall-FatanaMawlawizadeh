/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 3. Rotate Array K Times to the Right 
    Description: Rotate elements of an array K times to the right. 
    Example: 
    Input: [1, 2, 3, 4, 5], K = 2 
    Output: [4, 5, 1, 2, 3]

*/

export function rotateArrayToRight (arr, times) {
    if (!Array.isArray(arr) || isNaN(Number(times))) {
        throw new Error(`Error: Invalid input
        Make sure inputs are an array and a number`);
    }
    
    times = Math.abs(times);
    times = Math.floor(times);

    if (arr.length === 0) {
        return arr;
    }

    for (let i = 0; i < times; i++) {
        let lastIndex = arr[ arr.length -1 ];

        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j -1]
        }     

        arr[0] = lastIndex
    }
    
    return arr
};

console.log(rotateArrayToRight([1, 2, 3], 2)) //[2, 3, 1]