/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 25th, 2025 *

    Question 21. Password Strength Checker 
    Description: A strong password must: 
    • Be at least 8 characters long. 
    • Contain at least one uppercase letter, one lowercase letter, and one number. 
    Example: 
    Input: 
    MyPass123 
    Output: 
    Strong 
    Input: 
    pass 
    Output: 
    Weak

*/

import { describe, it, expect } from "vitest";
import { passwordStrengthChecker } from "../src/question21";

describe("passwordStrengthChecker checks if a pasword is strong or weak", () => {
    it("Does not check invalid inputs", () => {
        const error = `Error: Invalid input
        Make sure input is not undefined or null`

        expect(() => passwordStrengthChecker(45)).toThrow(error);
        expect(() => passwordStrengthChecker(undefined)).toThrow(error);
        expect(() => passwordStrengthChecker(null)).toThrow(error);
        expect(() => passwordStrengthChecker(324)).toThrow(error);
        expect(() => passwordStrengthChecker()).toThrow(error);
    });
    it("Returns Weak if password's length is smaller than 8", () => {
        const weak = "Weak";

        expect(passwordStrengthChecker("12raise")).toBe(weak);
    });
    it("Checks if a password is strong or not", () => {
        const weak = "Weak";
        const storng = "Strong";

        expect(passwordStrengthChecker("StrongPass1234")).toBe(storng);
        expect(passwordStrengthChecker("abcdefghijklmn")).toBe(weak);
        expect(passwordStrengthChecker("abc")).toBe(weak);
        expect(passwordStrengthChecker("12ab")).toBe(weak);
        expect(passwordStrengthChecker("UPleft1230")).toBe(storng);
    });
});