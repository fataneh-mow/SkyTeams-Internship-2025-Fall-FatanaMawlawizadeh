/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 21. Password Strength Checker 
    Description: A strong password must: 
    • Be at least 8 characters long. 
    • Contain at least one uppercase letter, one lowercase letter, and one number. 
    Example: 
    Input: 
    MyPass123 
    Output: 
    Strong 
    Input: 
    pass 
    Output: 
    Weak

*/

export function passwordStrengthChecker (password) {
    if (typeof password !== 'string' || password === undefined || password === null) {
        throw new Error(`Error: Invalid input
        Make sure input is not undefined or null`);
    }

    let passStrength = "";
        
    if (password.length < 8) { passStrength = "Weak" }

    let letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }

    let smallcaseLeters = [];
    for (const item of letters) {
        smallcaseLeters.push(item.toLowerCase())
    }

    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < password.length; i++) {

        if (letters.some( letter => password.includes(letter))
            && smallcaseLeters.some( smallletter => password.includes(smallletter)
            && numbers.some( num => password.includes(num)))) {
            passStrength = "Strong"
        }
        else {
            passStrength = "Weak"
        }
    }
    return passStrength;
};