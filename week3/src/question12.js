/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 12. Check for palindrome number 
    Description: Check if a number reads the same backward and forward. 
    Example: 
    Input: 
    121 
    Output: 
    Palindrome 
    Input: 
    123 
    Output: 
    Not Palindrome

*/

export function isPalindrome (number) {
    if(isNaN(Number(number)) || number === null || number === undefined) {
        throw new Error("Input must be number");
    }

    if (number <= 0) {
        throw new Error(`Number is not applicable`);
    }

    let firstNum = number[0];
    let NumLength = number.length
    let lastNum = number[NumLength-1];

    for (let i = 0; i < number.length; i++) {
        if (firstNum === lastNum) {
            return `Palindrome`;
        };
    };
    
    return `Not Palindrome`;
};

console.log(isPalindrome("1221"))

try {
    isPalindrome("helo");
} catch (error) {
    console.log("helo is not applicable");
}