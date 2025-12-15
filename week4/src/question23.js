/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 23. Top K Frequent Elements
    Input: [1,1,1,2,2,3], k=2 → [1,2] 

*/

import { utilitiesInlcludes } from "../utilities/utilities.js"

export function kTimesFerquentElements (arr, times) {
    if (!Array.isArray(arr) || arr === undefined || arr === null || isNaN(Number(times)) || times === undefined || times === null) {
        throw new Error(`Error: Invalid Input
        Make sure your input is an array and a number of element ferquency`);
    }

    let result = []

    let frequencyTimes = {}

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]

        if (frequencyTimes[currentElement] === undefined) { // if the key was not inside ferquencyTimes variable then store it with a value of 1
            frequencyTimes[currentElement] = 1
        } else { // and if it was already inside ferquencyTimes object then increase it's value
            frequencyTimes[currentElement]++
        }

    }

    for (let key in frequencyTimes) {
        if (frequencyTimes[key] >= times) {
            // preventing duplicates
            if (!utilitiesInlcludes(result, Number(key))) {
                result.push(Number(key))
            }
        }
    }


    return result; 
}

console.log(kTimesFerquentElements([1, 1, 1, 2, 2, 3, 3, 3, 3, 4], 2))