/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 16th, 2025

    * Question: Write a function to convert the tempreature

    * F = (C × 9/5) + 32
      C = (F - 32) × 5/9
*/

function convertToCelsius (temp) {
    if (isNaN(temp)) {
        return `Not a number!`;
    }
    else{
        return Math.round((temp - 32) * 5 / 9);
    }
}

function convertToFahrenheit  (temp) {
    if (isNaN(temp)) {
        return `Not a number!`;
    } 
    else {
        return Math.round(((temp* 9/5) + 32));
    }
}

let resultC = convertToCelsius(25);
console.log(resultC);

// let resultF = convertToFahrenheit ();
// console.log(resultF);