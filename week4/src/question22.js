/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 22. Merge Overlapping Intervals 
    Input: [[1,3],[2,6],[8,10]] → [[1,6],[8,10]] 

*/

export function mergeOverlappingIntervals (arr) {
    if (!Array.isArray(arr) || arr === null || arr === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is an array of intervals`);
    }

    if (arr.length === 0) {
        throw new Error("Error: empty array is invalid");
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 2 || arr[i].length > 2 || arr[i].length !== 2) {
            throw new Error("Error: Intervals must have 2 points");
        }
    }

    let resultArr = []
    resultArr.push(arr[0])

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]

        let lastMerged = resultArr[resultArr.length - 1]
        
        let lastStart = lastMerged[0]
        let lastEnd = lastMerged[1]

        let cuurStart = current[0]
        let currEnd = current[1]

        if (cuurStart <= lastEnd) {
            lastMerged[1] = Math.max(lastEnd, currEnd)
        } 
        else {
            resultArr.push(current)
        }
    }
    
    return resultArr;
}

console.log(mergeOverlappingIntervals([[1, 5], [3, 4]])) 
console.log(mergeOverlappingIntervals([[1,3],[2,6],[8,10]])) 
