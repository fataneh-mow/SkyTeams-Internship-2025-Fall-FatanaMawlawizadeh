/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 7. Rock, Paper, Scissors Game 
    Description: Simulate a game using random computer choices.

*/

import { describe, it, expect, vi } from "vitest";
import { rockPaperScissorsGameComparison, computerChoice } from "../src/question7";

it.afterEach(() => {
  vi.restoreAllMocks();
});

describe("rockPaperScissorsGameComparison comapres between two values of user and computer choices and specifies winner and loser or in case of being equal tells it is a tie", () => {
    it("Throws error when the user inout is not string", () => {
        const error = `Error: Invalid guess
        Make sure your guess is string`
        const testCasse = [null, undefined, 123]

        testCasse.forEach(test => {
            expect(() => rockPaperScissorsGameComparison(test)).toThrow(error);
        });
    });
    it("Throws error wehn user picks invalid item", () => {
        const error = `Error: Invalid item
        Make sure you choose one of three items
        rock, papre, scissors`

        const testCases = ["water", "desk", "plant"];

        testCases.forEach(test => {
            expect(() => rockPaperScissorsGameComparison(test)).toThrow(error);
        })
    });
    it("Compares results and returns statements, based on mocking, paper over rock user wins", () => {
        vi.spyOn(Math, "random").mockReturnValue(0);
        expect(computerChoice()).toBe("rock");
        expect(rockPaperScissorsGameComparison("paper")).toStrictEqual({ user: 'paper', computer: 'rock', result: 'You won' })
    });

    it("Compares results and returns statements, based on mocking, paper over paper it's a tie", () => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
        expect(computerChoice()).toBe("paper");
        expect(rockPaperScissorsGameComparison("paper")).toStrictEqual({ user: 'paper', computer: 'paper', result: "it's a tie" })
    });

    it("Compares results and returns statements, based on mocking, paper over scissors", () => {
        vi.spyOn(Math, "random").mockReturnValue(0.9);
        expect(computerChoice()).toBe("scissors");
        expect(rockPaperScissorsGameComparison("paper")).toStrictEqual({ user: 'paper', computer: 'scissors', result: "You lost" })
    });
});