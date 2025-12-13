/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 7. Rock, Paper, Scissors Game 
    Description: Simulate a game using random computer choices.

*/

export function userGuess (guess) {
    if (typeof guess !== "string" || guess === null || guess === undefined) {
        throw new Error(`Error: Invalid guess
        Make sure your guess is string`);
    }

    guess = String(guess).toLowerCase();

    if(guess !== "paper" && guess !== "rock" && guess !== "scissors") {
        throw new Error(`Error: Invalid item
        Make sure you choose one of three items
        rock, papre, scissors`);
    }
    
    return guess;
};

export function computerChoice () {
    let choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    return computerChoice;
};

export function rockPaperScissorsGameComparison (userInput) {
    let userValue = userGuess(userInput);
    let computerValue = computerChoice();

    let result = "";

    if (userValue === computerValue) {
        result = "it's a tie"
    }

    else if (
        (userValue === "rock" && computerValue === "scissors") ||
        (userValue === "paper" && computerValue === "rock") ||
        (userValue === "scissors" && computerValue === "paper") 
    ) {
        result = "You won";
    } 
    else {
        result = "You lost"
    }

    return {
        user: userValue,
        computer: computerValue,
        result: result
    };
};
console.log(rockPaperScissorsGameComparison("paper"));