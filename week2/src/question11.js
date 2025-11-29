/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question 11:  Simple Calculator using switch-case 
    Description: Input two numbers and an operator (+, -, *, /) and compute the result. 
    Example: 
    Input: 
    5, 3, + 
    Output: 
    8     
   
*/

export function calculate (num1, num2, operation) {
    const number1 = Number(num1);
    const number2 = Number(num2);

    if (isNaN(number1) || isNaN(number2)) {
        return `Inputs must be number`;
    }

    switch (operation) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2; 
        case "*":
            return number1 * number2;   
        case "/":
            if (number2 === 0) {
                return `Second number must not be zero`
            }
            return Math.round(number1 / number2);   
        default:
            return `Unknown character for operation`      
    };
};

let test = calculate(5, 7, "*");
console.log(test);
