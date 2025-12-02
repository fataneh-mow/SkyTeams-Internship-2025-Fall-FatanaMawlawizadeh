/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 14. Check character type
    
    * Determines if input is vowel, consonant, digit, or special symbol.
    Example: 
    Input: 
    a 
    Output: 
    Vowel
 */

import { describe, it, expect } from "vitest";
import { characterType } from "../src/question14";

describe("characterType function detects if which input belongs to which character type category", () => {
    it("Does not detect for the inputs more than one character or less than it", () => {
        expect(characterType(12)).toBe("Enter one character");
        expect(characterType()).toBe("Enter one character");
        expect(characterType("hello")).toBe("Enter one character");
        expect(characterType(null)).toBe("Enter one character");
    });
    it("Returns inputs' character type properly as consonant", () => {
        expect(characterType("C")).toBe("C is a Consonant");
        expect(characterType("Y")).toBe("Y is a Consonant");
        expect(characterType("y")).toBe("y is a Consonant");
        expect(characterType("c")).toBe("c is a Consonant");
    });
    it("Returns inputs' character type properly as vowels", () => {
        expect(characterType("A")).toBe("A is a Vowel");
        expect(characterType("a")).toBe("a is a Vowel");
        expect(characterType("I")).toBe("I is a Vowel");
        expect(characterType("i")).toBe("i is a Vowel");
    });
    it("Returns inputs' character type properly as numbers", () => {
        expect(characterType("1")).toBe("1 is a Digit");
        expect(characterType("0")).toBe("0 is a Digit");
        expect(characterType(0)).toBe("0 is a Digit");
        expect(characterType(3)).toBe("3 is a Digit");
    });
     it("Returns inputs' character type properly as symbols", () => {
        expect(characterType("*")).toBe("* is a Symbol");
        expect(characterType("(")).toBe("( is a Symbol");
        expect(characterType("#")).toBe("# is a Symbol");
        expect(characterType("$")).toBe("$ is a Symbol");
    });
});