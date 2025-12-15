/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 16. Fibonacci sequence 
    Description: Print the Fibonacci sequence up to N terms. 
    Example: 
    Input: 
    7 
    Output: 
    0, 1, 1, 2, 3, 5, 8
*/

export function printFibonacciSeries (number) {
    if (isNaN(Number(number)) || number === undefined || number === null) {
        throw new Error(`Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`);
    }

    let result = [];

    if (number === 0) return [0];
    if (number === 1) return [0, 1];
    number = Math.abs(number);
    number = Math.floor(number);

    let num1 = 0;
    let num2 = 1;

    result.push(num1, num2); // bcz it is proven that the two first numbers of a fibonacci list are 0 and 1

    for (let i = 2; i < number; i++) { // since I have two frist indexes [0,1] can start from third index [2]
        let fibonacciNum = num1 + num2;
        result.push(fibonacciNum);
        num1 = num2; 
        num2 = fibonacciNum;
    }

    return result;
};