/**
 * Author: Fatana Mawlawizadeh
 
* Date: Nov, 13rd, 2025

* Question: Write a function to find the gratest number in an array

*/
export function greatestNumber(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }
    let greatest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > greatest) {
            greatest = arr[i];
        }
    }
    return greatest;
}