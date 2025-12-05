/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 7. Rock, Paper, Scissors Game 
    Description: Simulate a game using random computer choices.

*/

export function rockPaperScissorsGame (guess) {
    if (typeof guess !== "string") {
        throw new Error(`Error: Invalid guess
        Make sure your guess is string`);
    }

    guess = String(guess).toLowerCase();

    let choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    let result;

    if( guess === computerChoice) {
        result = "it's a tie"
    }

    if (
        (guess === "rock" && computerChoice === "scissors") ||
        (guess === "paper" && computerChoice === "rock") ||
        (guess === "scissors" && computerChoice === "paper") 
    ) {
        result = "You won";
    } 
    else {
        result = "You lost"
    }

    return result;
};
console.log(rockPaperScissorsGame("paper"));