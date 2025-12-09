/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5th, 2025

    Question 11. String Rotation Check 
    Description: Check if one string is rotation of another. 
    Example: 
    "waterbottle", "erbottlewat" → True

*/

export function stringRotationCheck (str1, str2) {
    if (typeof str1 !== "string" || str1 === null || str1 === undefined ||
        typeof str2 !== "string" || str2 === null || str2 === undefined) {
        throw new Error(`Error: Invalid inputs
        Make sure inputs are strings`)
    }

    if (str1.length !== str2.length) {
        throw new Error("Strings must have the same length");
    }

    let doubbled = str1 + str1;

    for (let i = 0; i <= doubbled.length - str2.length; i++) {
        let result = true;

        for (let j = 0; j < str2.length; j++) {
            if(doubbled[i + j] !==  str2[j] ) {
                result = false
            }
            
        }

        if (result) {
            return true
        }
    }
    return false;
};
console.log(stringRotationCheck("waterbottle", "erbottlewat"));