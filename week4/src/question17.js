/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 17. Sentence Abbreviation 
    Description: Convert sentence into first-letter abbreviation. 
    Example: "I am learning JavaScript" → "I a l J"

*/

export function sentenceAbbreviation (sentence) {
    if(typeof sentence !== "string" || sentence === null || sentence === undefined) {
        throw new Error(`Error: Invalid input
        Make sure input is string`);
    }

    let words = sentence.split(' ');
    let firstLetters = "";

    for (let i = 0; i < words.length; i++) {
        firstLetters += words[i][0] + ' '
    }

    return firstLetters;
}
console.log(sentenceAbbreviation("I study English"))