/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 23. Calculate Factorial Using Recursion 
    Description: Implement factorial(n), which calculates the factorial of n using recursion. 
    Example: 
    Input: 
    5 
    Output: 
    120

*/

export function factorialNumber (number) {
    if (isNaN(Number(number)) || number === null || number === undefined) {
        throw new Error(`Error: Invalid Input
       Input must not be one of the following
       String, Undefined, Null`);
    }

    number = Math.abs(number);
    number = Math.floor(number);

    let result = 1;

    if (number === 1 || number === 0) {
        return result;
    }

    else {
        return number * factorialNumber(number - 1);
    }

};
console.log(factorialNumber(6));
console.log(factorialNumber(5));


try {
    factorialNumber(null)
} catch (error) {
    const errorr = `Error: Invalid Input
       Input must not be one of the following
       String, Undefined, Null`
    console.log(errorr);
}