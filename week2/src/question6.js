/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to Compute Simple and Compound Interest

    Example: 
    Input: 
    3665 
    Output: 
    1 hr, 1 min, 5 sec 
*/

function convertTime (seconds) {
    let hours = seconds / 60;
    let minutes = hours / 60;
    let seconds1 = minutes / 60;

    return `${hours} hr, ${minutes} m, ${seconds1}s`
}

let result = convertTime(3665);
console.log(result);