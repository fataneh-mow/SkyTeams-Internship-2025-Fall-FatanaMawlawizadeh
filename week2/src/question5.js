/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to Compute Simple and Compound Interest
    Simple Interest = (P × R × T) / 100 
    Compound Interest = P × ((1 + R/100) ^ T - 1) 
    Example: 
    Input: 
    P = 1000, R = 5, T = 2 
    Output: 
    SI = 100, CI ≈ 102.5
   
*/

export function simpleInterest (P , R, T) {
    let SI = (P * R * T ) / 100;
    return `SI = ${SI}`;
};


export function compoundInterest (P, R, T) {
    let CI = (P * (Math.pow(1 + R/100, T) - 1)).toFixed(1); 
    return `CI = ${CI}`;
};