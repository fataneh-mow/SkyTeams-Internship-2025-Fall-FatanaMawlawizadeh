import { it, describe , expect } from "vitest";
import { isEven } from "../src/question2";
import { isPrime } from "../src/question2";


describe ("isEven()", () => {
    it("returns 'even' for the even numbers", () => {
        expect(isEven(44)).toBe("even");
        expect(isEven(12)).toBe("even");
        expect(isEven(10)).toBe("even");
        expect(isEven(32)).toBe("even");
    });
    
    it("returns 'odd' for odd numbers", () => {
        expect(isEven(13)).toBe("odd");
        expect(isEven(23)).toBe("odd");
        expect(isEven(1)).toBe("odd");
        expect(isEven(35)).toBe("odd");
    })
});

describe("isPrime()", () => {
    it("returns true for prime numbers", () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
    });

    it("returns false for non-prime numbers", () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(10)).toBe(false);
    });

    it("returns uncheckable for numbers < 2", () => {
        expect(isPrime(1)).toBe("1 is unchekable, insert another number");
        expect(isPrime(0)).toBe("0 is unchekable, insert another number");
        expect(isPrime(-5)).toBe("-5 is unchekable, insert another number");
        expect(isPrime("Hello")).toBe("Hello is unchekable, insert another number");
        expect(isPrime(null)).toBe("null is unchekable, insert another number");
    });
});
