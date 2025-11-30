/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 25. Number Guessing Game 
    Description: 
    • The program randomly selects a number between 1 and 100. 
    • The user must guess the number. 
    • The program gives hints like “Too High” or “Too Low”. 
    • Continue until the user guesses correctly. 

*/

export function guessNumber () {
    let randomNums = [];
    for (let i = 0; i <= 100; i++) {
        randomNums.push(i)
    }
    // console.log(randomNum);
    
    let randomGotten = 0;
    for (let j = 0; j <= 100; j++) {
        randomGotten = (Math.floor(Math.random(j) * randomNums.length));
    }
    // console.log(randomGotten);

    let userGuess = 90;
    let hint = "";
    if (userGuess < randomGotten) {
        hint = "Too low"
    } 
    else if (userGuess > randomGotten) {
        hint = "Too high"
    }
    else if (userGuess === randomGotten) {
        hint = "Your guess is true!" 
    }

    return hint;
}
console.log(guessNumber());