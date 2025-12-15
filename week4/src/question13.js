/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 13. String Pattern Matching ("abba") 
    Description: Check if sentence follows the pattern. 
    Example: "dog cat cat dog" → True

*/
import { utilitiesSplit, utilitiesInlcludes } from "../utilities/utilities.js";

export function isPatternMatchingString (pattern, str) {
    if (typeof pattern !== "string" || pattern === null || pattern === undefined || typeof str !== "string" || str === null || str === undefined) {
        throw new Error(`Error: Ivalid inputs
        Make sure inputs are string`);
    }

    let characters;

    if (utilitiesInlcludes(str, ' ')) {
        characters = utilitiesSplit(str, ' ')
    } else {
        characters = utilitiesSplit(str, '')
    }

    const map = new Map();
    const usedCharacters = new Set();

    for (let i = 0; i < pattern.length; i++) {
        let patternCharacter = pattern[i];
        let strCharacter = characters[i];  
        
        if (!map.has(patternCharacter)) {
            if (usedCharacters.has(strCharacter)) {
                return false;
            }
            else {
                map.set(patternCharacter, strCharacter);
                usedCharacters.add(strCharacter);
            }
        }
        else {
            if (map.get(patternCharacter) !== strCharacter) {
                return false;
            }
        }
    }
    return true;
}

console.log(isPatternMatchingString("abba","dog cat cat dog"));
console.log(isPatternMatchingString("abab","mama"));
console.log(isPatternMatchingString("abca","dog cat cat dog"));
