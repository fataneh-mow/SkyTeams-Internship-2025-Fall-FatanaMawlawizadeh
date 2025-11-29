/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 19. Reverse a number 
    Description: Reverse the digits of an integer. 
    Example: 
    Input: 
    1234 
    Output: 
    4321

*/

export function reverseNumber(number) {
    let num = Number(number);

    if (isNaN(num)) {
        return `Insert number`;
    } 
    if (num <= 0) {
        return `Insert positive numbers`
    }

    num = String(number);

    let reversed = "";

    for (let i = num.length - 1; i >= 0; i--) {
        reversed += num[i];
    }

    return Number(reversed);
}

console.log(reverseNumber(56789));
console.log(reverseNumber("1234"));