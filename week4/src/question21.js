/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 11th, 2025

    Question 21. Longest Palindromic Substring 
    Input: "babad" → "bab" or "aba" 

*/

import { utilitiesReverseString, utilitiesGenerateSubStringsOfString } from "../utilities/utilities.js";

export function longestPalindromicSubstring (str) {
    if (typeof str !== "string" || str === null || str === undefined) {
        throw new Error(`Error: Invalid Input
        Make sure input is string`);
    }

    if (str.length === 0) {
        return str
    }
    
    let subStrings = utilitiesGenerateSubStringsOfString(str);

    // reversing each sub string
    let reversed = [];

    for (let i = 0; i < subStrings.length; i++) {
        reversed.push(utilitiesReverseString(subStrings[i]))
    }

    let longestPalinSubstring = "";

    for (let i = 0; i < subStrings.length; i++) {
        let originalStr = subStrings[i]
        let reversedStr = reversed[i]

        if (originalStr === reversedStr) {
            if (originalStr.length > longestPalinSubstring.length) {
                longestPalinSubstring = originalStr
            }
        }
    }

    return longestPalinSubstring;
}

console.log(longestPalindromicSubstring("babad"))