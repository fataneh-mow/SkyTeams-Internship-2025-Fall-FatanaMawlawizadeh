import { it, direction, expect } from "vitest";
import { swap } from "../src/question1";

describe("swap function", () => {
     it("swap two values", () => {
        expect(swap(2, 3)).toBe(3, 2);
    });

    it("works with zero", () => {
        expect(swap(0, 10)).toBe(10, 0);
    }); 
});
