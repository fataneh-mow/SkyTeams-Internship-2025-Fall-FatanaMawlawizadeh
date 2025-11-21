/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 20th, 2025

    * Question 23. Fibonacci series up to N terms 
    Description: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...) up to N terms. 
    Example: 
    Input: 
    7 
    Output: 
    0, 1, 1, 2, 3, 5, 8

*/

export function fibonacciSeries(n) {
    if (isNaN(Number(n)) || n === undefined || n === null) {
        return "Insert a number";
    }

    n = Number(n);

    if (n <= 0) {
        return [];
    };

    const sequence = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    };

    return sequence;
};

