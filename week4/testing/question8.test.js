/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 8.Menu-Based ATM System 
    Description: Handle options for balance, withdraw, deposit, exit. 
    Example: "100 withdrawn successfully"

*/

import { describe, it, expect } from "vitest";
import { balanceAccount, withdrawFromAccount, depositToAccount, exitFromATM } from "../src/question8";

describe("balanceAccount, withdrawFromAccount, depositToAccount, exitFromATM: these functions are some features and functions from an ATM system", () => {
    let account = 10000
    it("balanceAccount gives you the amount of money you have", () => {
        expect(balanceAccount(account)).toBe(10000);
    });
    it("withdrawFromAccount throws error when the withdraw amount is greater than account amount", () => {
        const withdrawnAmount = [20000, 30000, 40000]

        withdrawnAmount.forEach( amount => {
            expect(() => withdrawFromAccount(amount, account)).toThrow(`${amount} is greater than your account budget`);
        });
    });
    it("withdrawFromAccount witdraws from account with updating it", () => {
        expect(account = withdrawFromAccount(500, account)).toBe(9500);
        expect(account = withdrawFromAccount(500, account)).toBe(9000);
        expect(account = withdrawFromAccount(500, account)).toBe(8500);
    });
    it("depositToAccount function adds the amout user wants to account and updates it", () => {
        expect(account = depositToAccount(500, account)).toBe(9000);
        expect(account = depositToAccount(5000, account)).toBe(14000);
    });
    it("exitFromATM gives you the final status of your account", () => {
        expect(exitFromATM(account)).toBe(`Final status of your account 14000, Thank you for using ATM`);
    });
});