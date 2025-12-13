/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 15. Kadane’s Algorithm (Max Subarray Sum) 
    Example: 
    [-2,1,-3,4,-1,2,1,-5,4] → 6

*/

export function KadaneAlgorithmMaxSubarraySum (arr) {
    if (!Array.isArray(arr) || arr === undefined || arr === null) {
        throw new Error(`Error: Invalid input
        Make sure input is an array`);
    }

    let currentSum = 0;
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }     
    }

    return maxSum;
};