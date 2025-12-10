/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 8.Menu-Based ATM System 
    Description: Handle options for balance, withdraw, deposit, exit. 
    Example: "100 withdrawn successfully"

*/

import { describe, it, expect } from "vitest";
import { balanceAccount, withdrawFromAccount, depositToAccount, exitFromATM, menuOptions } from "../src/question8";

describe("menuOptions function provides a menu of four main ATM functions to user", () => {
    it("When option 1 is selected balances", () => {
        let account = 500
        expect(menuOptions(1, account)).toBe(500)
    })
    it("When option 2 is selected withdrwas if it is less than account budget and throws error when it is greater", () => {
        let account = 500

        const error = `This amount is greater than your account budget`
        expect(() => menuOptions(2, account, 1000)).toThrow(error)

        expect(menuOptions(2, account, 200)).toBe(300)
    })
    it("When option 3 is selected adds the deposit amount to selected account", () => {
        let account = 500
        expect(menuOptions(3, 200, account)).toBe(700)
    }) 
    it("When option 3 is selected exits from ATM", () => {
        let account = 500
        let finalMessage = `Final status of your account ${account}, Thank you for using ATM`

        expect(menuOptions(4, account)).toBe(finalMessage)
    })
    it("Throws error when options greater than 4 are selected", () => {
        const error = `Error: Invalid option
            Make sure you choose options avaliable from 1 to 4`

        const testCases = [5, 6, 7];
        testCases.forEach(test => {
            expect(() => menuOptions(test)).toThrow(error)
        })
    })
});
