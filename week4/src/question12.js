/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 12. Character Frequency Counter 
    Description: Count occurrences of characters. 
    Input: "banana" → {b:1, a:3, n:2}

*/

export function characterFerquencyCount (str) {
    if (typeof str !== "string" || str === undefined || str === null) {
        throw new Error(`Error: Invalid input
        Make sure input is string`);
    }


    // let characterCount = 1;
    let characterObject = {}
    
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (characterObject[currentChar]) {
            characterObject[currentChar]++;
        }
        else {
            characterObject[currentChar] = 1
        }
    }
    return characterObject;
};
console.log(characterFerquencyCount("sssww"));