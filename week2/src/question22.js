/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 22. Print even numbers in a range 
    Description: Input start and end values, print all even numbers between them. 
    Example: 
    Input: 
    1, 10 
    Output: 
    2, 4, 6, 8, 10

*/

export function printEven(start, end) {
    if (isNaN(Number(start)) || isNaN(Number(end)) || start === undefined || end === undefined || end === null || start === null) {
        return `Insert only numbers`
    };

    const arr = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    };
    return arr;
};