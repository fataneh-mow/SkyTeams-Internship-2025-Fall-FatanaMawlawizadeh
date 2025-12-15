/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 7th, 2025

    Question 14. All Permutations of a String 
    Description: Generate all permutations. 
    Input: "abc" → abc, acb, bac, ... 

*/

import { utilitiesSliceString } from "../utilities/utilities.js";

export function stringPermutations (str) {
    if (typeof str !== "string" || str === null || str === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is string`);
    }
    
    if (str.length === 0) {
        return [""];
    }

    let result = []

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        let remaining = utilitiesSliceString(str, 0, i) + utilitiesSliceString(str, i + 1);

        let subPermutations = stringPermutations(remaining)

        for (let j = 0; j < subPermutations.length; j++) {
            result.push(currentChar + subPermutations[j])
        }
    }

    return result;
}