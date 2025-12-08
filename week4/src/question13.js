/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 13. String Pattern Matching ("abba") 
    Description: Check if sentence follows the pattern. 
    Example: "dog cat cat dog" → True

*/

// export function isStringPatternMatching (str) {
//     if (typeof str !== "string" || str === null || str === undefined) {
//         throw new Error(`Error: Ivalid input
//         Make sure input is string`);
//     } 
//     let splitedStr = str.split('');

//     let startIndex = splitedStr[0];

//     let endChar = splitedStr.length -1
//     let endIndex = splitedStr[endChar]

//     let isPatternMatching = true;

//     while (startIndex <= endIndex) {

//         if (startIndex !== endIndex) {
//             isPatternMatching = false;
//         }

//         startIndex += 1;
//         endIndex -= 1;
//     }

//     return isPatternMatching;
// };


export function isPatternMatchingString (pattern, str) {
    if (typeof pattern !== "string" || pattern === null || pattern === undefined || typeof str !== "string" || str === null || str === undefined) {
        throw new Error(`Error: Ivalid inputs
        Make sure inputs are string`);
    }

    let isPatternMatching = false;

    let characters;

    if (str.includes(' ')) {
        characters = str.split(' ')
    } else {
        characters = str.split('')
    }

    const map = new Map();
    const usedCharacters = new Set();

    for (let i = 0; i < pattern.length; i++) {
        let patternCharacter = pattern[i];
        let strCharacter = characters[i];  
        
        if (!map.has(patternCharacter)) {
            if (usedCharacters.has(strCharacter)) {
                return isPatternMatching;
            }
            else {
                map.set(patternCharacter, strCharacter);
                usedCharacters.add(strCharacter);
            }
        }
        else {
            if (map.get(patternCharacter) !== strCharacter) {
                return isPatternMatching;
            }
        }
    }
    isPatternMatching = true;
    return isPatternMatching;
}

console.log(isPatternMatchingString("abba","dog cat cat dog"));
console.log(isPatternMatchingString("abab","mama"));
console.log(isPatternMatchingString("abca","dog cat cat dog"));
