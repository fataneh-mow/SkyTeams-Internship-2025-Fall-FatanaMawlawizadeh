/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 23th, 2025 *

    Question 1. Count vowels in a string 
    Description: Count the number of vowels (a, e, i, o, u) in a given string. 
    Example: 
    Input: 
    "SkyTeams Internship" 
    Output: 
    6

*/

export function vowelCount(string) {
    if (typeof string !== "string") {
        throw new Error("Input must be string!");
    }

    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }

    return `${string} has ${count} vowels`;
}

// try {
//     console.log(vowelCount("hello")); 
//     console.log(vowelCount(123));    
// } catch (error) {
//     console.log("Input must be string!");
// }