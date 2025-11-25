/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 14. Check character type
    
    * Determines if input is vowel, consonant, digit, or special symbol.
    Example: 
    Input: 
    a 
    Output: 
    Vowel
 */

export function characterType(char) {

    let letters = [];
    // A - Z upperCase
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }
    // a - z lowerCase
    for (let i = 97; i <= 122; i++) {
        letters.push(String.fromCharCode(i));
    }

    let vowels = ["A","E","I","O","U","a","e","i","o","u"];

    let numbers = [];
    for (let i = 0; i <= 9; i++) {
        numbers.push(i,String(i));
    }

    let symbols = [];

    for (let i = 32; i <= 47; i++) {
        symbols.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
        symbols.push(String.fromCharCode(i));
    }
    for (let i = 91; i <= 96; i++) {
        symbols.push(String.fromCharCode(i));
    }
    for (let i = 123; i <= 126; i++) {
        symbols.push(String.fromCharCode(i));
    }

    switch (true) {
        case String(char).length !== 1:
            return "Enter one character";
        case vowels.includes(char):
            return `${char} is a Vowel`;

        case letters.includes(char) && !vowels.includes(char):
            return `${char} is a Consonant`;

        case numbers.includes(char):
            return `${char} is a Digit`;

        case symbols.includes(char):
            return `${char} is a Symbol`;

        default:
            return `enter one character`;
    }
};