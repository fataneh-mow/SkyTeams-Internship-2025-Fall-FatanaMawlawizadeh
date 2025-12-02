/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 2nd, 2025

    Question 2. Merge Two Sorted Arrays 
    Description: Merge two sorted arrays into a single sorted array. 
    Example: 
    Input: [1, 3, 5], [2, 4, 6] 
    Output: [1, 2, 3, 4, 5, 6]

*/

export function sortingArrays (arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error(`Error: Invalid input
        Make sure input is array`);
    }

    let arr1Sorted;
    let arr2Sorted;

    function sortArray(arr) {

        let sorted = [];
        while (arr.length > 0) {
            let min = arr[0];
            let minIndex = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                    minIndex = i;
                }
            }
            sorted.push(min);
            arr.splice(minIndex, 1); // remove min from arr, so the next iteration can find the next min to sort it
        }
        return sorted;
    }

    arr1Sorted = sortArray(arr1);
    arr2Sorted = sortArray(arr2);

    let merged = arr1Sorted.concat(arr2Sorted);

    return sortArray(merged);
};
// console.log(sortingArrays([], [3, 9, 7]));