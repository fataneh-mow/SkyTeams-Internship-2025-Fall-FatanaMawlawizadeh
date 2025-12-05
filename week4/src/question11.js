/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

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
    let result;

    for (let i = 0; i < doubbled.length; i++) {
        if (doubbled.search(str2 !== -1)) { 
            result = true
        }
        else {
            result = false
        }
    }
    return result;
};
console.log(stringRotationCheck("waterbottle", "erbottlewat")); 