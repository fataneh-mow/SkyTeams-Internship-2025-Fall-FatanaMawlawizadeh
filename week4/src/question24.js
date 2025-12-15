/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 12th, 2025

    Question 24. K-th Largest Element
    Given an array of numbers and a value k, find the number that would appear in the k-th
    position if the array were sorted in descending order.

*/

import { utilitiesSortMaxToMin } from "../utilities/utilities.js";

export function k_thLargestElement (arr, kPosition) {
    if (!Array.isArray(arr) || arr === undefined || arr === null || kPosition === undefined || kPosition === null || isNaN(Number(kPosition))) {
        throw new Error(`Error: Invalid Input
        Make sure input is an array and a position of array's element`);
    }

    if (kPosition > arr.length) {
        throw new Error(`Error: Invalid Position
        Make sure you are searching for an avaliable position`);
    }

    arr = utilitiesSortMaxToMin(arr)

    return arr [kPosition - 1]
};